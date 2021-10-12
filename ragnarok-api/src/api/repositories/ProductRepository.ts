import { prisma } from "../../config/client";
import { v4 as uuid } from 'uuid'
import { IProduct } from "../interfaces/IProduct";
import { IProductReposiroty } from "./IProductRepository";

class ProductRepository implements IProductReposiroty {

  async createProduct(product: IProduct): Promise<void> {
    await prisma.product.create({
      data: {
        id: uuid(),
        ... product
      }
    })
  }

}

export { ProductRepository }
