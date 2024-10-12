import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();
router.route("/register").post(
    upload.single("avatar"), // Just pass the field name as a string
    registerUser
);

export default router;
