import { Request, Response } from "express";
import { IProduct, IProductReposiroty } from "../../repositories/IProductRepository";

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
    const products: IProduct[] = await this.productRepository.getAllProducts();

    return res.status(200).json(products);
  }
}

export { ViewProductsController };
