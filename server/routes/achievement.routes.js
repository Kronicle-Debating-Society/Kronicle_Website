import { Router } from "express";
import { newAchievement } from "../controllers/achivement.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = Router();

router
  .route("/new")
  .post(verifyJWT, isAdmin, upload.single("picture"), newAchievement);


export default router;
