import { Request, Response } from "express";
import { userPlanService } from "../services/user.plan.service";
import { chatLimit } from "../utils/chat.limit.util";
import { prismaClient } from "../utils/prisma.client";
import { planService } from "../services/plan.service";
import { productService } from "../services/product.service";

export const dashboardController = {
    getDashboardHome: async (req: Request, res: Response) => {
        try {
            const {pid} = req.params;

            if(await userPlanService.ownUserPlanId(req, pid)) {
                const userPlan = await userPlanService.getUserPlanById(pid);
                const plan = await planService.getPlanById(userPlan!.plan_id);

                const productCount = await prismaClient().product.count({
                    where: {
                        user_plan_id: userPlan!.id
                    }
                })

                const limits = await chatLimit.getUserPlanLimit(Number(pid));

                res.status(200).json({
                    data: {
                        remainingChats: limits!.chat_count - userPlan!.chats_used,
                        remainingDays: plan!.days - Math.round((Date.now() - userPlan!.created_at.getTime())/(24*60*60*1000)),
                        operatorCount: await prismaClient().user.count({
                            where: {
                                operator_user_plan_id: Number(pid)
                            }
                        }),
                        maxChats: limits!.chat_count,
                        maxOperators: limits!.operator_count,
                        maxDays: plan!.days,
                        productCount
                    }
                });
            } else {
                res.status(404).json({
                    error: "User plan not found!",
                })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    }
}