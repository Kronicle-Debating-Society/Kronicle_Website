import express from "express";




const app = express();

// Route handler for the root route
app.get("/", (req, res) => {
  res.send("Hello from the backend team of kronicle debsoc");
});



export { app };
