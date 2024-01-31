import { Request, Response } from "express";
import { prismaClient } from "../utils/prisma.client";

export const productController = {
    getProducts: async (req: Request, res: Response) => {
        try {
            const products = await prismaClient().product.findMany();
            console.log(`[+] ${products.length} products fetched.`);
            res.status(200).json({
                data: products,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    getProductById: async (req: Request, res: Response) => {
        try {
            const { id } = req.body;
            const product = await prismaClient().product.findUnique({
                where: {
                    id,
                },
            });
            console.log(`product ${product?.title} fetched.`);
            res.status(200).json({
                data: product,
            });
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
            } = req.body;
            const product = await prismaClient().product.create({
                data: {
                    url,
                    title,
                    description,
                    image,
                    price,
                    attributes,
                    user_plan_id,
                    weight,
                },
            });
            console.log(`product ${product.title} added.`);
            res.status(201).json({
                data: product,
            });
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
                user_plan,
                user_plan_id,
                weight,
            } = req.body;
            if (status === false) {
                status = true;
            } else {
                status = false;
            }
            const product = await prismaClient().product.update({
                data: {
                    url,
                    title,
                    description,
                    image,
                    price,
                    status,
                    attributes,
                    user_plan,
                    user_plan_id,
                    weight,
                },
                where: {
                    id,
                },
            });
            console.log(`Product ${product.id} updated.`);
            res.status(200).json({
                data: product,
            });
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
            const product = await prismaClient().product.delete({
                where: {
                    id,
                },
            });
            console.log(`product ${product.title} deleted.`);
            res.status(200).json({
                data: product,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
};
