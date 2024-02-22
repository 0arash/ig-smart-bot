import express from "express";
import { invoiceController } from "../controllers/invoice.controller";
import { requireRole } from "../middlewares/auth.middleware";
import { Role } from "@prisma/client";
import {
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

router.post(
    "/pay",
    paramIdValidator,
    requireRole(Role.USER),
    invoiceController.payInvoiceById
);
router.post(
    "/",
    requireRole(Role.USER),
    invoiceController.newInvoice
);

export const invoiceRouter = router;
