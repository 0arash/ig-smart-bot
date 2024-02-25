import { InvoiceStatus } from "@prisma/client";
import { prismaClient } from "../utils/prisma.client";
import { userPlanService } from "./user.plan.service";

export const planDiscountService = {
    checkValidDiscountForUser: async (code: string, user_id: string) => {
        if (code === undefined) return true;

        try {
            const discountCode = await prismaClient().planDiscount.findUnique({
                where: {
                    code,
                },
            });
            if (!discountCode) return false;

            const userPlansUsingDiscount =
                await userPlanService.getUserPlansByDiscountId(
                    discountCode?.id
                );

            let result = true;
            const userId = Number(user_id);
            userPlansUsingDiscount.forEach((userPlan) => {
                if (userPlan.user_id === userId) result = false;
            });

            return result;
        } catch {
            return false;
        }
    },
    getDiscountByCode: async (code: string) => {
        return code === undefined
            ? null
            : await prismaClient().planDiscount.findUnique({
                  where: {
                      code,
                  },
              });
    },
};
