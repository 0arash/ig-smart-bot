import express from "express";
import { invoiceController } from "../controllers/invoice.controller";
import { requireRole } from "../middlewares/auth.middleware";
import { Role } from "@prisma/client";
import {
    emailValidator,
    paramIdValidator,
} from "../validators/router.validation";
const router = express.Router();

router.get(
    "/:id",
    paramIdValidator,
    requireRole(Role.USER),
    invoiceController.getInvoiceById
);
router.get(
    "/invoices/:id",
    paramIdValidator,
    requireRole(Role.USER),
    invoiceController.getInvoicesByUserId
);

router.get(
    "/pay/:id",
    paramIdValidator,
    requireRole("USER"),
    invoiceController.payInvoiceById
);

export const invoiceRouter = router;
