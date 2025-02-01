import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import jwt from "jsonwebtoken";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generateTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  console.log("Request Body:", req.body);
  const { name, email, password, membertype } = req.body;

  // Validate user input
  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required (name, email, password)");
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "User already exists with this email");
  }

  // Initialize avatar variables
  let avatarLocalPath = "";
  let avatar = { url: "" }; // Default empty avatar

  // Handle file upload if a file is provided
  if (req.file && req.file.path) {
    avatarLocalPath = req.file.path;
    avatar = await uploadOnCloudinary(avatarLocalPath);
  }

  // Create the user
  const user = await User.create({
    name: name.toLowerCase(),
    email,
    password, // Assuming password hashing is done in the model
    membertype,
    avatar: avatar.url || "", // Default to empty string if no file is uploaded
  });

  // Fetch the created user excluding sensitive fields
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering user");
  }

  // Return success response
  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  // Find the user by email
  const user = await User.findOne({ email }); // Await the promise
  if (!user) {
    throw new ApiError(400, "User not found");
  }

  // Check if the password is correct
  const isPasswordCorrect = await user.isPasswordCorrect(password); // Call on user instance
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Password incorrect");
  }

  // Generate tokens
  const { accessToken, refreshToken } = await generateTokens(user._id); // Ensure this function exists

  // Find the logged-in user without sensitive info
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  ); // Await the promise

  // Set cookie options
  const options = {
    httpOnly: true,
    secure: true, // Make sure your app runs over HTTPS for this
  };

  // Send response with cookies
  return res
    .status(200)
    .cookie("accessToken", accessToken, options) // Use the correct token variable name
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken, // Use the correct variable name
          refreshToken,
        },
        "User login successful"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1, // this removes the field from document
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"));
});

const updateUser = asyncHandler(async (req, res) => {
  const { igLink, linkedLink, githubLink } = req.body;
  const userId = req.user._id; // assuming user is authenticated and req.user contains the user info

  let user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "user not found in Database");
  }

  // Update fields if they exist in the request body
  if (igLink) user.igLink = igLink;
  if (linkedLink) user.linkedLink = linkedLink;
  if (githubLink) user.githubLink = githubLink;

  const updatedUser = await user.save();
  if (!updatedUser) {
    throw new ApiError(500, "Something went wrong while updating user");
  }
  res
    .status(200)
    .json(new ApiResponse(200, updatedUser, "user updated successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  try {
    const incomingRefreshToken =
      req.cookies.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
      throw new ApiError(401, "unauthorized request");
    }
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "Invalid Refresh Token");
    }
    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh Token Expired");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };
    const { accessToken, newRefreshToken } = await generateTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "tokens refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "invalid token");
  }
});

const showUser = asyncHandler(async (req, res) => {
  const user = req.user;
  if (!user) {
    throw new ApiError(400, "user does not exist");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, { user }, "user shown succesfully"));
});

const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new ApiError(400, "All fields are required");
  }

  // Fetch the user by ID
  const user = await User.findById(req.user._id);

  // Check if the old password is correct
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid old password");
  }

  // Update password and hash it
  user.password = newPassword; // hashing is done in the User model's pre-save hook
  await user.save();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

const showEventHistory = asyncHandler(async (req, res) => {
  const user = await User.aggregate([
    {
      $match: { _id: req.user._id }, // Match the logged-in user
    },
    {
      $lookup: {
        from: "events",
        localField: "eventHistory",
        foreignField: "_id",
        as: "details",
      },
    },
    {
      $addFields: {
        eventNames: {
          $map: {
            input: "$details",
            as: "event",
            in: "$$event.title",
          },
        },
        eventPic: {
          $map: {
            input: "$details",
            as: "event",
            in: "$$event.thumbnail", // Assuming it's 'thumbnail'
          },
        },
      },
    },
    {
      $project: {
        name: 1, // Project the user's name
        email: 1, // Project the user's email
        eventNames: 1, // Include the event names
        eventPic: 1, // Include the event thumbnails
      },
    },
  ]);

  return res
    .status(200)
    .json(new ApiResponse(200, { user }, "Event history shown successfully"));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  refreshAccessToken,
  showUser,
  changePassword,
  showEventHistory,
};
