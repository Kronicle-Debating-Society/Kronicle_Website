import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();
router.route("/register").post(
  upload.single("avatar"), // Just pass the field name as a string
  registerUser
);
router.route("/login").post(loginUser);

//securefileds access only after login
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
