import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  refreshAccessToken,
  showUser,
  changePassword,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();
router.route("/register").post(
  upload.single("avatar"), // Just pass the field name as a string
  registerUser
);
router.route("/login").post(loginUser);
router.route("/refresh-token").post(refreshAccessToken);

//securefileds access only after login verifyJWT is used to check whether the user is loggedIn or not

router.route("/logout").post(verifyJWT, logoutUser);
router.route("/update").patch(verifyJWT, updateUser);
router.route("/show-user").get(verifyJWT, showUser);
router.route("/change-password").patch(verifyJWT, changePassword);
export default router;
