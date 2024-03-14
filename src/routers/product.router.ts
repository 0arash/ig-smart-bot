import express from "express";
import { productController } from "../controllers/product.controller";
import { requireRole } from "../middlewares/auth.middleware";

const router = express.Router();

export const productRouter = router;

router.get("/", requireRole("USER"), productController.getProducts);
router.get("/:id", requireRole("USER"), productController.getProductById);
router.post("/", requireRole("USER"), productController.newProduct);
router.put("/:id", requireRole("USER"), productController.updateProductById);
router.delete("/:id", requireRole("USER"), productController.deleteProductById);
