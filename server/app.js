import express from "express";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({
  path: "./.env",
});

// Define the port from the environment variable
const port = process.env.PORT || 3000; // Fallback to port 3000 if PORT is not defined

const app = express();

// Route handler for the root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export { app };
