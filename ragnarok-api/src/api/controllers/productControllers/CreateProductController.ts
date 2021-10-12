import { Request, Response } from "express";
import { IProductReposiroty } from "../../repositories/IProductRepository";
import { IProductValidation } from "../../validation/IProductValidation";
class CreateProductController {

  constructor(
    private productRepository: IProductReposiroty,
    private productValidation: IProductValidation
  ) {}

  async createProduct(req: Request, res: Response): Promise<Response> {
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

    await this.productValidation.createProductValidate(product)

    await this.productRepository.createProduct(product)

    return res.status(201).json({ message: 'Produto salvado!'})
  }

}

export { CreateProductController }
