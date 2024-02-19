import express from "express";
import { requireRole } from "../middlewares/auth.middleware";
import { crawlerController } from "../controllers/crawler.controller";
import { Role } from "@prisma/client";
const router = express();

export const crawlerRouter = router;

router.put("/", requireRole(Role.USER), crawlerController.updateRequestCrawler);
