import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Event } from "../models/events.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const newEvent = asyncHandler(async (req, res) => {
  const { title, description, regCost, date, venue, mode } = req.body;

  if (!title || !description || !regCost || !date || !venue || !mode)
    throw new ApiError(400, "all fields are required");

  const thumbnailLocalFile = req.file.path;

  const thumbnail = await uploadOnCloudinary(thumbnailLocalFile);

  const event = await Event.create({
    title,
    description,
    regCost,
    date,
    venue,
    mode,
    thumbnail: thumbnail.url,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, { event }, "new event created"));
});

export { newEvent };
