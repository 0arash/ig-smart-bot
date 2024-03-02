import express from "express";
import { settingsController } from "../controllers/settings.controller";
import { requireRole } from "../middlewares/auth.middleware";

const router = express.Router();
export const settingsRouter = router;

router.get("/", requireRole("USER"), settingsController.getSettings);
router.put("/", requireRole("USER"), settingsController.updateSettings);
router.post("/", requireRole("USER"), settingsController.newSettings);
