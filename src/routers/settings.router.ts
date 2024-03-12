import express from "express";
import { settingsController } from "../controllers/settings.controller";
import { requireRole } from "../middlewares/auth.middleware";

export const settingsRouter = express.Router();

settingsRouter.get("/:upid", requireRole("USER"), settingsController.getSettings);
settingsRouter.put("/", requireRole("USER"), settingsController.updateSettings);
settingsRouter.post("/", requireRole("USER"), settingsController.newSettings);
