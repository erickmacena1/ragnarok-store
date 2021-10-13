import { ProductRepository } from "../../repositories/ProductRepository"
import { ImageService } from "../../services/ImageService"
import { ProductValidation } from "../../validation/productValidation"
import { CreateProductController } from "./CreateProductController"
import { DeleteProductController } from "./DeleteProductController"
import { UpdateProductController } from "./UpdateProductController"
import { ViewProductsController } from "./ViewProductsController"

const productRepository = new ProductRepository()
const productValidation = new ProductValidation()
const imageService = new ImageService()

const createProductController = new CreateProductController(
  productRepository,
  productValidation,
  imageService
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
