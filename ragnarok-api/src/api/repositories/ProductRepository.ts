import { prisma } from "../../config/client";
import { v4 as uuid } from 'uuid'
import { IProduct } from "../interfaces/IProduct";
import { IProductReposiroty } from "./IProductRepository";
import { Product } from ".prisma/client";

class ProductRepository implements IProductReposiroty {

  async createProduct(product: IProduct): Promise<void> {
    await prisma.product.create({
      data: {
        id: uuid(),
        ... product
      }
    })
  }

  async getProduct(id: string): Promise<Product> {
    const product: Product | null = await prisma.product.findFirst({
      where: {
        id
      }
    })

    if (product === null) throw Error('Produto não encontrado!')

    return product
  }

  async getAllProducts(): Promise<Product[]> {
    const products: Product[] = await prisma.product.findMany()

    if (products.length == 0) throw Error('A lista de Produtos está vazia!')

    return products
  }

  async updateProduct(id: string, product: IProduct): Promise<Product> {
    const updatedProduct = await prisma.product.update({
      where: {
        id
      },
      data: {
        ... product
      }
    })

    return updatedProduct
  }

  async deleteProduct(id: string): Promise<void> {
    await prisma.product.delete({
      where: {
        id
      }
    })
  }

}

export { ProductRepository }
