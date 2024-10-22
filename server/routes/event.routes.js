import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { newEvent, registerForEvent } from "../controllers/event.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = Router();
// isAdmin middleware is used to check whether  the loggedIn user is having a role of "Admin" or not
router
  .route("/new-event")
  .post(verifyJWT, isAdmin, upload.single("thumbnail"), newEvent);
router.route("/register/:eventId").post(verifyJWT, registerForEvent);

export default router;
