import express from "express";
import { invoiceController } from "../controllers/invoice.controller";
import { requireRole } from "../middlewares/auth.middleware";
import { Role } from "@prisma/client";
const router = express.Router();

router.post(
    "/",
    requireRole(Role.USER),
    invoiceController.checkValidDiscountForUser
);

export const discountRouter = router;
