import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";
import { IProduct } from "../../interfaces/IProduct";
import { IProductReposiroty } from "../../repositories/IProductRepository";
import { ProductValidation } from "../../validation/productValidation";

class UpdateProductController {

  constructor (
    private productRepository: IProductReposiroty
  ) {}

  async updateProduct(req: Request, res: Response) {

    const productValidation = new ProductValidation()

    const { id } = req.params

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

    await productValidation.updateProductValidate(product)

    const updatedProduct = await this.productRepository.updateProduct(id, product)

    return res.status(200).json(updatedProduct)
  }

}

export { UpdateProductController }
