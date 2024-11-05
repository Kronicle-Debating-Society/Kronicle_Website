import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { Event } from "../models/events.model.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// Controller for creating a new event (Admin only)
const newEvent = asyncHandler(async (req, res) => {
  const { title, description, regCost, date, venue, mode, customQuestions } =
    req.body;

  // Log the request body
  // console.log("Request body:", req.body);

  // Validate required fields
  if (!title || !description || !regCost || !date || !venue || !mode) {
    throw new ApiError(400, "All fields are required");
  }

  // Handle image upload
  let thumbnail;
  if (req.file) {
    const cloudinaryResult = await uploadOnCloudinary(req.file.path, "events");
    thumbnail = cloudinaryResult.secure_url;
  } else {
    throw new ApiError(400, "Thumbnail image is required");
  }

  // Prepare data to save
  const eventData = {
    title,
    description,
    regCost,
    date,
    venue,
    mode,
    thumbnail,
    customQuestions: customQuestions || [], // Handle optional field
  };

  // Log event data to be saved
  // console.log("Event data to be saved:", eventData);

  // Create the new event
  try {
    const event = await Event.create(eventData);
    return res
      .status(201)
      .json(new ApiResponse(201, event, "Event created successfully"));
  } catch (error) {
    console.error("Error saving event:", error);
    throw new ApiError(500, "An error occurred while creating the event");
  }
});

// Controller for user registration for an event
const registerForEvent = asyncHandler(async (req, res) => {
  const { eventId } = req.params; // Get event ID from request parameters
  const { answers } = req.body; // Array of answers to custom questions
  const userId = req.user._id; // Get the logged-in user from the verified token

  // Find the event by ID
  const event = await Event.findById(eventId);
  if (!event) {
    throw new ApiError(404, "Event not found");
  }

  // Check if user is already registered for the event
  const user = await User.findById(userId);
  if (user.eventHistory.some((hist) => hist.event.toString() === eventId)) {
    throw new ApiError(400, "You are already registered for this event");
  }

  // Validate answers (ensure the number of answers matches the custom questions)
  if (event.customQuestions.length !== answers.length) {
    throw new ApiError(400, "Please answer all the custom questions");
  }

  // Register the user for the event
  user.eventHistory.push({
    event: eventId, // This should be an ObjectId
    answers: answers, // Store user's answers to custom questions
  });

  await user.save(); // Save user registration

  // Increment the registration count for the event
  event.regCount += 1;
  await event.save();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Successfully registered for the event"));
});

export { newEvent, registerForEvent };
