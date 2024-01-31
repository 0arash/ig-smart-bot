import express from "express";
import { requireRole } from "../middlewares/auth.middleware";
import { verifyToken } from "../middlewares/token.middleware";
import { userPlanController } from "../controllers/user.plan.controller";
const router = express.Router();

router.get('/', requireRole("USER"), userPlanController.getUserPlans)

export const userPlanRouter = router;
