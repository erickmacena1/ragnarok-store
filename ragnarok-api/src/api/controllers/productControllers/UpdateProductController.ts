import { Request, Response } from "express";
import { MulterFile } from "../../interfaces/MulterFile";
import { IProductReposiroty } from "../../repositories/IProductRepository";
import { IProductValidation } from "../../validation/IProductValidation";
import { IUpdateProduct } from '../../interfaces/IUpdateProduct'
import imagesHelpes from "../../helper/imagesHelpes";

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
      value
    } = req.body

    const file = req.file as MulterFile

    let product: IUpdateProduct = {
      name,
      description,
      value,
    }

    if (file) {

      let {
        location,
        filename
      } = file

      product = {
        ... product,
        image: location || imagesHelpes.getLocalUrl(filename ? filename : '')
      }
    }

    await this.productValidation.updateProductValidate(product)

    const updatedProduct = await this.productRepository.updateProduct(id, product)

    return res.status(200).json(updatedProduct)
  }

}

export { UpdateProductController }
