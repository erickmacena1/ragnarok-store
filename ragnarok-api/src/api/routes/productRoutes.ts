import { Router } from "express";
import { upload } from "../../config/uploads";

import {
  createProductController,
  deleteProductController,
  updateProductController,
  viewProductController,
} from "../controllers/productControllers";

const productRoutes = Router();

productRoutes.post("/", upload.single("image"), (req, res) => {
  return createProductController.createProduct(req, res);
});

productRoutes.get("/", (req, res) => {
  return viewProductController.viewAllProducts(req, res);
});
productRoutes.get("/:id", (req, res) => {
  return viewProductController.viewOneProduct(req, res);
});

productRoutes.put("/:id", upload.single("image"), (req, res) => {
  return updateProductController.updateProduct(req, res);
});

productRoutes.delete("/:id", (req, res) => {
  return deleteProductController.deleteProduct(req, res);
});

export { productRoutes };
