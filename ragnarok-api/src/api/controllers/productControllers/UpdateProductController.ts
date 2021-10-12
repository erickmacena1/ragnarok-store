import { Request, Response } from "express";
import { IProductReposiroty } from "../../repositories/IProductRepository";
import { IProductValidation } from "../../validation/IProductValidation";

class UpdateProductController {

  constructor (
    private productRepository: IProductReposiroty,
    private productValidation: IProductValidation
  ) {}

  async updateProduct(req: Request, res: Response) {
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

    await this.productValidation.updateProductValidate(product)

    const updatedProduct = await this.productRepository.updateProduct(id, product)

    return res.status(200).json(updatedProduct)
  }

}

export { UpdateProductController }
