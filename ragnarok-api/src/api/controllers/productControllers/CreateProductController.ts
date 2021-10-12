import { PrismaClient, Product } from ".prisma/client";
import { Request, Response } from "express";
import { v4 as uuid } from 'uuid'
import { IProductReposiroty } from "../../repositories/IProductRepository";
import { ProductValidation } from "../../validation/productValidation";
class CreateProductController {

  constructor(
    private productRepository: IProductReposiroty
  ) {}

  async createProduct(req: Request, res: Response): Promise<Response> {
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

    await this.productRepository.createProduct(product)

    return res.status(201).json({ message: 'Produto salvado!'})
  }

}

export { CreateProductController }
