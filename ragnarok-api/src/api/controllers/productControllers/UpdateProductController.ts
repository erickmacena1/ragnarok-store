import { Request, Response } from "express";
import { MulterFile } from "../../interfaces/MulterFile";
import { IProductReposiroty } from "../../repositories/IProductRepository";
import { IProductValidation } from "../../validation/IProductValidation";
import { IUpdateProduct } from '../../interfaces/IUpdateProduct'
import imagesHelpes from "../../helper/imagesHelpes";
import { IImageService } from "../../services/imageService/IImageService";

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

    if (file) {

      let image = this.imageService.saveImage(file)

      product = {
        ... product,
        image
      }
    }

    await this.productValidation.updateProductValidate(product)

    await this.productRepository.updateProduct(id, product)

    if (file)
      // await this.imageService.deleteImageOnUpdate(id)



    return res.status(200).json({ message: `Product ${id} updated!` })
  }

}

export { UpdateProductController }
