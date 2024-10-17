import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { newEvent } from "../controllers/event.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = Router();

router
  .route("/new-event")
  .post(verifyJWT, isAdmin, upload.single("thumbnail"), newEvent);

export default router;
