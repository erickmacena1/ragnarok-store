import { IProduct } from "../interfaces/IProduct";
import { AssertsShape, Assign, ObjectShape } from "yup/lib/object";
import { IUpdateProduct } from "../interfaces/IUpdateProduct";

export interface IProductValidation {
  createProductValidate(product: IProduct): Promise<AssertsShape<Assign<ObjectShape, any>>>;
  updateProductValidate(product: IUpdateProduct): Promise<AssertsShape<Assign<ObjectShape, any>>>
}
