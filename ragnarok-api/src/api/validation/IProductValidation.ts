import { IProduct } from "../interfaces/IProduct";
import { AssertsShape, Assign, ObjectShape } from "yup/lib/object";

export interface IProductValidation {
  createProductValidate(product: IProduct): Promise<AssertsShape<Assign<ObjectShape, any>>>;
  updateProductValidate(product: IProduct): Promise<AssertsShape<Assign<ObjectShape, any>>>
}
