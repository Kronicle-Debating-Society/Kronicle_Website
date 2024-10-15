import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/apiResponse.js";

const generateTokens = async(userId) =>{
  try {
      const user = await User.findById(userId)
      const accessToken = user.generateAccessToken()
      const refreshToken = user.generateRefreshToken()

      user.refreshToken = refreshToken
      await user.save({ validateBeforeSave: false })

      return {accessToken, refreshToken}
    } catch (error) {
      throw new ApiError(500, "Something went wrong while generating referesh and access token")
  }
}

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, profilePic, membertype } = req.body;

  // Validate user input
  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required (name, email, password)");
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "User already exists with this email");
  }

  // Create the user
  const user = await User.create({
    name,
    email,
    password, // Assuming hashing is done in the model
    name: name.toLowerCase(),
    membertype: membertype,
  });

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
  const loggedInUser = await User.findById(user._id).select("-password -refreshToken"); // Await the promise

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

const logoutUser = asyncHandler(async(req, res) => {
  await User.findByIdAndUpdate(
      req.user._id,
      {
          $unset: {
              refreshToken: 1 // this removes the field from document
          }
      },
      {
          new: true
      }
  )

  const options = {
      httpOnly: true,
      secure: true
  }

  return res
  .status(200)
  .clearCookie("accessToken", options)
  .clearCookie("refreshToken", options)
  .json(new ApiResponse(200, {}, "User logged Out"))
})


export { registerUser,loginUser,logoutUser };
