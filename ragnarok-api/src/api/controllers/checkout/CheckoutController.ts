import { Request, Response } from "express";
import { IProductReposiroty } from "../../repositories/IProductRepository";
import { ICheckoutService } from "../../services/checkoutService/ICheckoutService";

class CheckoutController {

  constructor(
    private productRepository: IProductReposiroty,
    private checkoutService: ICheckoutService,
  ) {}

  async getCheckout(req: Request, res: Response) {

    const { id } = req.params

    const {
      name,
      description,
      image,
      value
    } = await this.productRepository.getProduct(id)

    const {
      url: imageUrl
    } = image

    const url = await this.checkoutService.getProductCheckout(name!, description!, value!, imageUrl!)

    return res.json(url)
  }
}

export { CheckoutController }
