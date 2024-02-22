import express from "express";
import { productController } from "../controllers/product.controller";

const router = express.Router();

export const productRouter = router;

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.newProduct);
router.put("/:id", productController.updateProductById);
router.delete("/:id", productController.deleteProductById);

