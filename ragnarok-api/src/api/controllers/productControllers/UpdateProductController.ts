import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";
import { IProduct } from "../../interfaces/IProduct";
import { ProductValidation } from "../../validation/productValidation";

class UpdateProductController {

  async updateProduct(req: Request, res: Response) {

    const prisma = new PrismaClient()
    const productValidation = new ProductValidation()

    const { id } = req.params
    const {
      name,
      description,
      image,
      value
    }: IProduct = req.body

    const product = {
      name,
      description,
      image,
      value
    }

    await productValidation.updateProductValidate(product)

    const updatedProduct = await prisma.product.update({
      where: {
        id
      },
      data: {
        ... product
      }
    })

    await prisma.$disconnect()

    return res.status(200).json(updatedProduct)
  }

}

export { UpdateProductController }
