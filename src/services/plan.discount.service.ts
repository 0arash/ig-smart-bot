import { InvoiceStatus } from "@prisma/client";
import { prismaClient } from "../utils/prisma.client";
import { userPlanService } from "./user.plan.service";

export const planDiscountService = {
    checkValidDiscountForUser: async (code: string, user_id: string) => {
        const discountCode = await prismaClient().planDiscount.findUnique({
            where: {
                code,
            },
        });

        if (!discountCode) return false;

        const userPlansUsingDiscount =
            await userPlanService.getUserPlansByDiscountId(discountCode?.id);

        let result = true;
        const userId = Number(user_id);
        userPlansUsingDiscount.forEach((userPlan) => {
            if (userPlan.user_id === userId) result = false;
        });

        return result;
    },
    getDiscountByCode: async (code: string) => {
        return await prismaClient().planDiscount.findUnique({
            where: {
                code,
            },
        });
    },
};
