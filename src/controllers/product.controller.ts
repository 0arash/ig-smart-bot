import { Request, Response } from "express";
import { productService } from "../services/product.service";
import { userPlanService } from "../services/user.plan.service";

export const productController = {
    getProducts: async (req: Request, res: Response) => {
        try {
            const { upid } = req.query;
            if (await userPlanService.ownUserPlanId(req, Number(upid))) {
                const products = await productService.getProducts(
                    Number(upid)
                );
                console.log(`[+] ${products.length} products fetched.`);
                res.status(200).json({
                    data: products,
                });
            } else {
                res.status(404).json({
                    error: "UserPlan not found.",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    getProductById: async (req: Request, res: Response) => {
        try {
            const { id } = req.query;
            const product = await productService.getProductById(Number(id));
            if (
                await userPlanService.ownUserPlanId(
                    req,
                    Number(product?.user_plan_id)
                )
            ) {
                res.status(200).json({
                    data: product,
                });
            } else {
                res.status(404).json({
                    error: "product not found",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    newProduct: async (req: Request, res: Response) => {
        try {
            const {
                url,
                title,
                description,
                image,
                price,
                attributes,
                user_plan_id,
                weight,
                brand,
                category_title,
            } = req.body;
            if (await userPlanService.ownUserPlanId(req, user_plan_id)) {
                const product = await productService.newProduct(
                    url,
                    title,
                    description,
                    image,
                    price,
                    attributes,
                    user_plan_id,
                    weight,
                    brand,
                    category_title
                );
                res.status(201).json({
                    data: product,
                });
            } else {
                res.status(403).json({
                    error: "Permission denied.",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    updateProductById: async (req: Request, res: Response) => {
        try {
            var {
                id,
                url,
                title,
                description,
                image,
                status,
                price,
                attributes,

                weight,
            } = req.body;
            if (status === false) {
                status = true;
            } else {
                status = false;
            }
            const product = await productService.getProductById(Number(id));
            if (
                await userPlanService.ownUserPlanId(
                    req,
                    Number(product?.user_plan_id)
                )
            ) {
                const product = await productService.updateProductById(
                    id,
                    url,
                    title,
                    description,
                    image,
                    price,
                    status,
                    attributes,
                    weight
                );
                return res.status(200).json({
                    data: product,
                });
            } else {
                return res.status(403).json({
                    error: "Permission denied.",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    deleteProductById: async (req: Request, res: Response) => {
        try {
            const { id } = req.body;
            const product = await productService.deleteProductById(Number(id));

            if (
                await userPlanService.ownUserPlanId(req, product.user_plan_id)
            ) {
                res.status(200).json({
                    data: product,
                });
            } else {
                res.status(403).json({
                    error: "Permission denied.",
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
