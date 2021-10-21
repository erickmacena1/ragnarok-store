import { prisma } from "../../config/client";
import { v4 as uuid } from 'uuid'
import { IProductDTO } from "../interfaces/IProductDTO";
import { IProduct, IProductReposiroty } from "./IProductRepository";
import { Product } from ".prisma/client";
import { IUpdateProduct } from "../interfaces/IUpdateProduct";

class ProductRepository implements IProductReposiroty {

  async createProduct(product: IProductDTO): Promise<void> {
    const {
      name,
      description,
      value,
    } = product

    const {
      key,
      url
    } = product.image

    await prisma.product.create({
      data: {
        id: uuid(),
        name,
        description,
        value,
        image: {
          create: {
            id: uuid(),
            url,
            key
          }
        }
      }
    })
  }

  async getProduct(id: string): Promise<IProduct> {
    const product = await prisma.product.findFirst({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        description: true,
        value: true,
        image: {
          select: {
            id: true,
            url: true
          }
        }
      },
    }) as IProduct

    if (product === null) throw Error('Produto não encontrado!')

    return product
  }

  async getAllProducts(): Promise<IProduct[]> {
    const products = await prisma.product.findMany({
      orderBy: {
        create_at: 'desc'
      },
      select: {
        id: true,
        name: true,
        description: true,
        value: true,
        image: {
          select: {
            id: true,
            url: true
          }
        }
      },
    }) as IProduct[]

    if (products.length == 0) throw Error('A lista de Produtos está vazia!')

    return products
  }

  async updateProduct(id: string, product: IUpdateProduct): Promise<Product> {

    const {
      name,
      description,
      value,
      image
    } = product

    const updatedProduct = await prisma.product.update({
      where: {
        id
      },
      data: {
        name,
        description,
        value,
        image: {
          update: {
            key: image?.key,
            url: image?.url
          }
        }
      }
    })

    return updatedProduct
  }

  async deleteProduct(id: string): Promise<IProduct> {
    return await prisma.product.delete({
      where: {
        id
      },
      include: {
        image: {
          select: {
            key: true
          }
        }
      }
    }) as IProduct
  }

}

export { ProductRepository }
