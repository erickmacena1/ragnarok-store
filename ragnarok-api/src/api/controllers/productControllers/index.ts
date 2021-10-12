import { ProductRepository } from "../../repositories/ProductRepository"
import { CreateProductController } from "./CreateProductController"
import { DeleteProductController } from "./DeleteProductController"
import { UpdateProductController } from "./UpdateProductController"
import { ViewProductsController } from "./ViewProductsController"

const productRepository = new ProductRepository()

const createProductController = new CreateProductController(
  productRepository
)

const viewProductController = new ViewProductsController(
  productRepository
)
const deleteProductController = new DeleteProductController(
  productRepository
)
const updateProductController = new UpdateProductController(
  productRepository
)

export {
  createProductController,
  viewProductController,
  deleteProductController,
  updateProductController
}
