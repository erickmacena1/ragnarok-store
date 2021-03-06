import { Router } from "express";
import { checkoutController } from '../controllers/checkout'

const checkoutRouter = Router()

checkoutRouter.get('/checkout/:id', (req, res) => {
  return checkoutController.getCheckout(req, res)
})

export { checkoutRouter }
