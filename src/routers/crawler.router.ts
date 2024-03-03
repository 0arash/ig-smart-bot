import express from "express";
import { requireRole } from "../middlewares/auth.middleware";
import { crawlerController } from "../controllers/crawler.controller";
import { Role } from "@prisma/client";
const router = express();

export const crawlerRouter = router;

router.put("/", crawlerController.updateRequestCrawler);
router.post("/:id",  crawlerController.newProductFromJson);
router.get("/get_user_plans", crawlerController.getUserPlans);
