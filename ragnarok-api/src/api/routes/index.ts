import { Router } from "express";
import { checkoutRouter } from "./checkoutRoutes";
import { productRoutes } from "./productRoutes";

const routes = Router()

routes.use('/api/v1', productRoutes)
routes.use('/api/v1', checkoutRouter)

export { routes }
