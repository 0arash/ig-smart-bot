import express from "express";
import { ticketController } from "../controllers/ticket.controller";
import { requireRole } from "../middlewares/auth.middleware";
import { Role } from "@prisma/client";
const router = express.Router();

export const ticketRouter = router;

router.get("/", requireRole(Role.USER), ticketController.getCurrentUserTickets);
router.get(
    "/:ticket_id/view",
    requireRole(Role.USER),
    ticketController.getTicketMessages
);
router.post(
    "/:ticket_id",
    requireRole(Role.USER),
    ticketController.newTicketMessage
);
router.post("/", requireRole(Role.USER), ticketController.newTicket);
