import { ImageRepository } from "../../repositories/imageRepository/ImageRepository"
import { ProductRepository } from "../../repositories/ProductRepository"
import { ImageService } from "../../services/imageService/ImageService"
import { ProductValidation } from "../../validation/productValidation"
import { CreateProductController } from "./CreateProductController"
import { DeleteProductController } from "./DeleteProductController"
import { UpdateProductController } from "./UpdateProductController"
import { ViewProductsController } from "./ViewProductsController"

const productRepository = new ProductRepository()
const imageRepository = new ImageRepository()
const productValidation = new ProductValidation()

const imageService = new ImageService(
  imageRepository
)

const createProductController = new CreateProductController(
  productRepository,
  productValidation,
  imageService
)

const viewProductController = new ViewProductsController(
  productRepository
)
const deleteProductController = new DeleteProductController(
  productRepository,
  imageService
)
const updateProductController = new UpdateProductController(
  productRepository,
  productValidation,
  imageService
)

export {
  createProductController,
  viewProductController,
  deleteProductController,
  updateProductController
}
