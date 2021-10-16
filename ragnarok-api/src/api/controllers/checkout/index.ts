import { CheckoutController } from './CheckoutController'
import { ProductRepository } from "../../repositories/ProductRepository"
import { CheckoutService } from '../../services/checkoutService/CheckoutService'

const productRepository = new ProductRepository()
const checkoutService = new CheckoutService()

const checkoutController = new CheckoutController(
  productRepository,
  checkoutService
)

export {
  checkoutController
}
