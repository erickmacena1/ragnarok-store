import { Router } from "express";
import { CheckoutController } from "../controllers/checkout/CheckoutController";

const checkoutRouter = Router()

const checkoutContrller = new CheckoutController()

checkoutRouter.get('/checkout/:id', (req, res) => {
  checkoutContrller.getCheckout(req, res)
})

export { checkoutRouter }
