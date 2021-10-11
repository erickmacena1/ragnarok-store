import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

class DeleteProductController {

  async deleteProduct(req: Request, res: Response) {

    const prisma = new PrismaClient()

    const { id } = req.params

    await prisma.product.delete({
      where: {
        id
      }
    })

    await prisma.$disconnect()

    return res.status(200).json({ message: `Produto com id '${id}' deletado!` })

  }

}

export { DeleteProductController }
