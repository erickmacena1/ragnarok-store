import { Request, Response } from "express";
import imagesHelpes from "../../helper/imagesHelpes";
import { MulterFile } from "../../interfaces/MulterFile";
import { IProductReposiroty } from "../../repositories/IProductRepository";
import { IImageService } from "../../services/IImageService";
import { IProductValidation } from "../../validation/IProductValidation";
class CreateProductController {

  constructor(
    private productRepository: IProductReposiroty,
    private productValidation: IProductValidation,
    private imageService: IImageService
  ) {}

  async createProduct(req: Request, res: Response): Promise<Response> {
    const {
      name,
      description,
      value
    } = req.body

    const file = req.file as MulterFile

    const image = this.imageService.saveImage(file)

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
