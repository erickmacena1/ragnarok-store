import { Product } from ".prisma/client";
import { IProduct } from "../interfaces/IProduct";

export interface IProductReposiroty {
  createProduct(product: IProduct): Promise<void>;
  getProduct(id: string): Promise<Product>
  getAllProducts(): Promise<Product[]>
}
