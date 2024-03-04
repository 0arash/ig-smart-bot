import express from "express";
import { requireRole } from "../middlewares/auth.middleware";
import { dashboardController } from "../controllers/dashboard.controller";

const router = express.Router();

// upid -> user plan id
router.get("/:upid", requireRole("USER"), dashboardController.getDashboardHome);

export const dashboardRouter = router;
