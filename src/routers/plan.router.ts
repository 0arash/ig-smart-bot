import express from "express";
import { planController } from "../controllers/plan.controller";
import { requireRole } from "../middlewares/auth.middleware";
const router = express.Router();

export const planRouter = router;

router.get("/", requireRole("USER"), planController.getPlans);
router.get("/:id", requireRole("USER"), planController.getPlanById);
router.post("/", requireRole("USER"), planController.newPlan);
router.put("/:id", requireRole("USER"), planController.updatePlanById);
router.delete("/", requireRole("USER"), planController.deletePlanById);
