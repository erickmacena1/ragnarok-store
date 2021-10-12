import { Request, Response, Router } from 'express';
import { CreateProductController,  } from '../controllers/productControllers/CreateProductController';
import { DeleteProductController } from '../controllers/productControllers/DeleteProductController';
import { UpdateProductController } from '../controllers/productControllers/UpdateProductController';
import { ViewProductsController } from '../controllers/productControllers/ViewProductsController';
import { ProductRepository } from '../repositories/ProductRepository';

const productRepository = new ProductRepository

const createProductController = new CreateProductController(
  productRepository
)

const viewProductController = new ViewProductsController(
  productRepository
)
const deleteProductController = new DeleteProductController(
  productRepository
)
const updateProductController = new UpdateProductController()

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

productRoutes.put('/:id', updateProductController.updateProduct);

productRoutes.delete('/:id', (req, res) => {
  deleteProductController.deleteProduct(req, res)
});

export { productRoutes };
