import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.Cors_Origin,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(express.urlencoded({ limit: "16kb" }));
app.use(express.static("public"))

app.use(cookieParser())

// Route handler for the root route
app.get("/", (req, res) => {
  res.send("Hello from the backend team of kronicle debsoc");
});


export { app };
