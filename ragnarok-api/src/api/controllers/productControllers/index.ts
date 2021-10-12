import { ProductRepository } from "../../repositories/ProductRepository"
import { ProductValidation } from "../../validation/productValidation"
import { CreateProductController } from "./CreateProductController"
import { DeleteProductController } from "./DeleteProductController"
import { UpdateProductController } from "./UpdateProductController"
import { ViewProductsController } from "./ViewProductsController"

const productRepository = new ProductRepository()
const productValidation = new ProductValidation()

const createProductController = new CreateProductController(
  productRepository,
  productValidation
)

const viewProductController = new ViewProductsController(
  productRepository
)
const deleteProductController = new DeleteProductController(
  productRepository
)
const updateProductController = new UpdateProductController(
  productRepository,
  productValidation
)

export {
  createProductController,
  viewProductController,
  deleteProductController,
  updateProductController
}
