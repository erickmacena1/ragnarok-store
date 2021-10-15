import { Request, Response } from "express";
import { IProductReposiroty } from "../../repositories/IProductRepository";
import { IImageService } from "../../services/imageService/IImageService";

class DeleteProductController {

  constructor (
    private productRepository: IProductReposiroty,
    private imageService: IImageService
  ) {}

  async deleteProduct(req: Request, res: Response) {

    const { id } = req.params

    const { image } = await this.productRepository.deleteProduct(id);

    this.imageService.deleteImage(image.key ? image.key : '')

    return res.status(200).json({ message: `Produto com id '${id}' deletado!` })

  }

}

export { DeleteProductController }
