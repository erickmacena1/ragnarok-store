import { Prisma, Product } from ".prisma/client";
import { IProductDTO } from "../interfaces/IProductDTO";
import { IUpdateProduct } from "../interfaces/IUpdateProduct";

export interface IProductReposiroty {
  createProduct(product: IProductDTO): Promise<void>;
  getProduct(id: string): Promise<IProduct>;
  getAllProducts(): Promise<IProduct[]>;
  updateProduct(id: string, product: IUpdateProduct): Promise<Product>;
  deleteProduct(id: string): Promise<IProduct>;
}

export interface IProduct {
  id?: string;
  name?: string;
  description?: string;
  value?: Prisma.Decimal;
  image: IProductImage;
  create_at?: Date;
  update_at?: Date;
}

export interface IProductImage {
  id?: string;
  url?: string;
  key?: string;
  productId?: string;
  create_at?: Date;
}
