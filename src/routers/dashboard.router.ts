import express from "express";
import { requireRole } from "../middlewares/auth.middleware";
import { dashboardController } from "../controllers/dashboard.controller";

const router = express.Router();

router.get("/:pid", requireRole("USER"), dashboardController.getDashboardHome);

export const dashboardRouter = router;
