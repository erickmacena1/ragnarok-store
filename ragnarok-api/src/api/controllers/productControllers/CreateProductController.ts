import { Request, Response } from "express";
import imagesHelpes from "../../helper/imagesHelpes";
import { MulterFile } from "../../interfaces/MulterFile";
import { IProductReposiroty } from "../../repositories/IProductRepository";
import { IProductValidation } from "../../validation/IProductValidation";
class CreateProductController {

  constructor(
    private productRepository: IProductReposiroty,
    private productValidation: IProductValidation,
  ) {}

  async createProduct(req: Request, res: Response): Promise<Response> {
    const {
      name,
      description,
      value
    } = req.body

    const {
      filename,
      location
    } = req.file as MulterFile

    const image = location || imagesHelpes.getLocalUrl(filename ? filename : '')

    const product = {
      name,
      description,
      value,
      image
    }

    await this.productValidation.createProductValidate(product)

    await this.productRepository.createProduct(product)

    return res.status(201).json({ message: 'Produto salvado!'})
  }

}

export { CreateProductController }
