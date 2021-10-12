import { IProduct } from "../interfaces/IProduct";

export interface IProductReposiroty {
  createProduct(product: IProduct): Promise<void>;
}
