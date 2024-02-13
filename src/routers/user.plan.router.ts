import express from "express";
import { requireRole } from "../middlewares/auth.middleware";
import { userPlanController } from "../controllers/user.plan.controller";
const router = express.Router();

router.get("/:id", requireRole("USER"), userPlanController.getUserPlansById);
router.get("/:id", requireRole("USER"), userPlanController.getUserPlanById);
router.put("/:id", requireRole("USER"), userPlanController.updateUserPlanById);
router.post("/:id", requireRole("USER"), userPlanController.generateApiKeyById);

export const userPlanRouter = router;
