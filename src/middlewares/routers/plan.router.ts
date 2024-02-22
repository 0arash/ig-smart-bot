import express from "express";
import { planController } from "../controllers/plan.controller";
const router = express.Router();

export const planRouter = router;

router.get("/", planController.getPlans);
router.get("/:id", planController.getPlanById);
router.post("/", planController.newPlan);
router.put("/:id", planController.updatePlanById);
router.delete("/", planController.deletePlanById);
