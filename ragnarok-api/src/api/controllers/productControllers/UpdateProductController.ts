import { Request, Response } from "express";
import { MulterFile } from "../../interfaces/MulterFile";
import { IProductReposiroty } from "../../repositories/IProductRepository";
import { IProductValidation } from "../../validation/IProductValidation";
import { IUpdateProduct } from '../../interfaces/IUpdateProduct'
import { IImageService } from "../../services/imageService/IImageService";
import { Image } from ".prisma/client";

class UpdateProductController {

  constructor (
    private productRepository: IProductReposiroty,
    private productValidation: IProductValidation,
    private imageService: IImageService
  ) {}

  async updateProduct(req: Request, res: Response) {
    const { id } = req.params

    const {
      name,
      description,
      value
    } = req.body

    const file = req.file as MulterFile

    let product: IUpdateProduct = {
      name,
      description,
      value,
    }

    var imageToBeDeleted: Image

    if (file) {

      let image = this.imageService.saveImage(file)

      product = {
        ... product,
        image
      }


      imageToBeDeleted = await this.imageService.deleteImageOnUpdate(id)
    }

    await this.productValidation.updateProductValidate(product)

    await this.productRepository.updateProduct(id, product)

    if (file)
      this.imageService.deleteImage(imageToBeDeleted!.key)

    return res.status(200).json({ message: `Product ${id} updated!` })
  }

}

export { UpdateProductController }
