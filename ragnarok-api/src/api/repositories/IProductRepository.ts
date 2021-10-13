import { Product } from ".prisma/client";
import { IProduct } from "../interfaces/IProduct";
import { IUpdateProduct } from '../interfaces/IUpdateProduct'

export interface IProductReposiroty {
  createProduct(product: IProduct): Promise<void>;
  getProduct(id: string): Promise<Product>;
  getAllProducts(): Promise<Product[]>;
  updateProduct(id: string, product: IUpdateProduct): Promise<Product>;
  deleteProduct(id: string): Promise<void>;
}
