import { Request, Response } from "express";
import { IProductReposiroty } from "../../repositories/IProductRepository";

class DeleteProductController {

  constructor (
    private productRepository: IProductReposiroty
  ) {}

  async deleteProduct(req: Request, res: Response) {

    const { id } = req.params

    await this.productRepository.deleteProduct(id)

    return res.status(200).json({ message: `Produto com id '${id}' deletado!` })

  }

}

export { DeleteProductController }
