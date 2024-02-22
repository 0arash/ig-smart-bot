import { Request, Response } from "express";
import { prismaClient } from "../utils/prisma.client";

export const ticketController = {
    getCurrentUserTickets: async (req: Request, res: Response) => {
        try {
            // @ts-ignore
            const user_id = req.user.id;

            const tickets = prismaClient().ticket.findMany({
                where: {
                    user_id,
                },
            });

            res.status(200).json({
                data: tickets,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    getTicketMessages: async (req: Request, res: Response) => {
        try {
            // @ts-ignore
            const user_id = req.user.id;

            const { ticket_id } = req.params;

            const ticket = await prismaClient().ticket.findUnique({
                where: {
                    id: Number(ticket_id),
                    user_id: user_id,
                },
            });

            if (ticket) {
                const ticketMessages =
                    await prismaClient().ticketMessage.findMany({
                        where: {
                            ticket_id: ticket.id,
                        },
                    });

                res.status(200).json({
                    data: ticketMessages,
                });
            } else {
                res.status(404).json({
                    error: "Ticket not found.",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    newTicket: async (req: Request, res: Response) => {
        try {
            // @ts-ignore
            const user_id = req.user.id;

            const { user_plan_id, subject, content } = req.body;

            const ticket = await prismaClient().ticket.create({
                data: {
                    user_id: user_id,
                    user_plan_id: user_plan_id,
                    is_open: true,
                },
            });

            if (ticket) {
                const ticketMessage = await prismaClient().ticketMessage.create(
                    {
                        data: {
                            ticket_id: ticket.id,
                            subject,
                            content,
                            owner_id: user_id,
                        },
                    }
                );

                if (ticketMessage) {
                    res.status(201).json({
                        data: await prismaClient().ticket.findUnique({
                            where: {
                                id: ticket.id,
                            },
                            include: {
                                ticket_messages: true,
                            },
                        }),
                    });
                } else {
                    res.status(500).json({
                        error: "Could not create ticket message.",
                    });
                }
            } else {
                res.status(500).json({
                    error: "Could not create ticket.",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    newTicketMessage: async (req: Request, res: Response) => {
        try {
            // @ts-ignore
            const user_id = req.user.id;

            const { ticket_id, subject, content } = req.body;

            const ticket = await prismaClient().ticket.findUnique({
                where: {
                    id: ticket_id,
                },
            });

            if (ticket) {
                const ticketMessage = await prismaClient().ticketMessage.create(
                    {
                        data: {
                            subject,
                            content,
                            ticket_id: ticket.id,
                            owner_id: user_id,
                        },
                    }
                );

                if (ticketMessage) {
                    res.status(201).json({
                        data: ticketMessage,
                    });
                } else {
                    res.status(500).json({
                        error: "Could not create ticket message.",
                    });
                }
            } else {
                res.status(404).json({
                    error: "Ticket not found.",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    updateTicket: async (req: Request, res: Response) => {
        try {
            // @ts-ignore
            const user_id = req.user.id;

            const { ticket_id } = req.params;
            const { is_open } = req.body;

            const ticket = await prismaClient().ticket.findUnique({
                where: {
                    id: Number(ticket_id),
                },
            });

            if (ticket) {
                const updatedTicket = await prismaClient().ticket.update({
                    where: {
                        id: ticket.id,
                    },
                    data: {
                        is_open,
                    },
                });

                res.status(200).json({
                    data: updatedTicket,
                });
            } else {
                res.status(404).json({
                    error: "Ticket not found.",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
};
