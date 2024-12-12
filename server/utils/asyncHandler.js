const asyncHandler = (fn) => async (req, res, next) => {
  try {
      await fn(req, res, next);
  } catch (err) {
      // Log the entire error object
      console.error("Error caught in asyncHandler:", err);

      // Ensure err.code is a valid HTTP status code
      const statusCode = err.code && [200, 201, 400, 401, 404, 500].includes(err.code) ? err.code : 500;
      console.log("Sending response with status code:", statusCode);

      res.status(statusCode).json({
          success: false,
          message: err.message,
      });
  }
};


export {asyncHandler}