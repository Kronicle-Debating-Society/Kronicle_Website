import { asyncHandler } from "../utils/asyncHandler.js";
import { Achievement } from "../models/achivements.model.js";
import { ApiError } from "../utils/apiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const newAchievement = asyncHandler(async (req, res) => {
  const { name, description, member } = req.body;

  // Check if all fields are provided
  if (!name || !description || !member) {
    throw new ApiError(400, "All fields are required");
  }

  // Check if the file is uploaded
  if (!req.file || !req.file.path) {
    throw new ApiError(400, "Please upload a picture");
  }

  const localFilePath = req.file.path;

  // Upload the file to Cloudinary
  let picture;
  try {
    picture = await uploadOnCloudinary(localFilePath);
  } catch (error) {
    throw new ApiError(500, "Error while uploading the picture to the cloud");
  }

  // Create a new achievement
  const achievement = await Achievement.create({
    name,
    description,
    member,
    picture: picture.url,  // Store picture URL from Cloudinary
  });

  // Send response back to client
  return res
    .status(201)
    .json(new ApiResponse(200,{achievement},"achievement created succesfully"))
});

export { newAchievement };
