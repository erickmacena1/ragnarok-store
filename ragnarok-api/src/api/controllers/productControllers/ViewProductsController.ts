import { Product } from ".prisma/client";
import { Request, Response } from "express";
import { IProductReposiroty } from "../../repositories/IProductRepository";

class ViewProductsController {

  constructor(
    private productRepository: IProductReposiroty
  ) {}

  async viewOneProduct(req: Request, res: Response) {
    const { id } = req.params;

    const product = await this.productRepository.getProduct(id);

    return res.status(200).json(product);
  }

  async viewAllProducts(req: Request, res: Response) {
    const products: Product[] = await this.productRepository.getAllProducts();

    return res.status(200).json(products);
  }
}

export { ViewProductsController };
