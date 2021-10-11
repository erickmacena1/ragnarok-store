import { PrismaClient, Product } from ".prisma/client";
import { Request, Response } from "express";
import { v4 as uuid } from 'uuid'
import { ProductValidation } from "../../validation/productValidation";
class CreateProductController {

  async createProduct(req: Request, res: Response): Promise<Response> {
    const prisma = new PrismaClient()

    const productValidator = new ProductValidation()

    const {
      name,
      description,
      image,
      value
    } = req.body

    const product = {
      name,
      description,
      image,
      value
    }

    await productValidator.createProductValidate(product)

    await prisma.product.create({
      data: {
        id: uuid(),
        ... product
      }
    })

    return res.status(201).json({ message: 'Produto salvado!'})
  }

}

export { CreateProductController }
