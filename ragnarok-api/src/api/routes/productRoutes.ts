import { Request, Response, Router } from 'express';
import { CreateProductController,  } from '../controllers/productControllers/CreateProductController';
import { DeleteProductController } from '../controllers/productControllers/DeleteProductController';
import { UpdateProductController } from '../controllers/productControllers/UpdateProductController';
import { ViewProductsController } from '../controllers/productControllers/ViewProductsController';
import { ProductRepository } from '../repositories/ProductRepository';

const createProductController = new CreateProductController(
  new ProductRepository
)

const viewProductController = new ViewProductsController()
const deleteProductController = new DeleteProductController()
const updateProductController = new UpdateProductController()

const productRoutes = Router();

productRoutes.post('/', (req, res) => {
  createProductController.createProduct(req, res)
});

productRoutes.get('/', viewProductController.viewAllProducts);
productRoutes.get('/:id', viewProductController.viewOneProduct);

productRoutes.put('/:id', updateProductController.updateProduct);

productRoutes.delete('/:id', deleteProductController.deleteProduct);

export { productRoutes };
