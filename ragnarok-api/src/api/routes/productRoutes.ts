import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  updateProductController,
  viewProductController } from '../controllers/productControllers';

const productRoutes = Router();

productRoutes.post('/', (req, res) => {
  createProductController.createProduct(req, res)
});

productRoutes.get('/', (req, res) => {
  viewProductController.viewAllProducts(req, res)
});
productRoutes.get('/:id', (req, res) => {
  viewProductController.viewOneProduct(req, res)
});

productRoutes.put('/:id', (req, res) => {
  updateProductController.updateProduct(req, res)
});

productRoutes.delete('/:id', (req, res) => {
  deleteProductController.deleteProduct(req, res)
});

export { productRoutes };
