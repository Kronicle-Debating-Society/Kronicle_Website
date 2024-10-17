import { ApiError } from "../utils/apiError.js";

export const isAdmin = (req, res, next) => {
  try {
    // Check if user exists in the request (this assumes verifyJWT has already been executed)
    if (!req.user) {
      throw new ApiError(401, "Unauthorized request, user not found");
    }

    // Check if the user has the 'admin' role
    if (req.user.membertype !== "admin") {
      throw new ApiError(403, "Access forbidden: Admins only");
    }

    // If user is an admin, allow access to the next middleware/controller
    next();
  } catch (error) {
    next(error); // Pass any errors to the global error handler
  }
};
