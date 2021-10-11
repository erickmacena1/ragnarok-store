import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

class ViewProductsController {

  async viewAllProducts(req: Request, res: Response) {

    const prisma = new PrismaClient()

    const products = await prisma.product.findMany()

    await prisma.$disconnect()

    return res.status(200).json(products)
  }

  async viewOneProduct(req: Request, res: Response) {

    const prisma = new PrismaClient()

    const { id } = req.params

    const product = await prisma.product.findFirst({
      where: {
        id
      }
    })

    await prisma.$disconnect()

    return res.status(200).json(product)
  }

}

export { ViewProductsController }
