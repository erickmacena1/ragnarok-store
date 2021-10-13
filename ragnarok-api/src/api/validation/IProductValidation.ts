import { IProductDTO } from "../interfaces/IProductDTO";
import { AssertsShape, Assign, ObjectShape } from "yup/lib/object";
import { IUpdateProduct } from "../interfaces/IUpdateProduct";

export interface IProductValidation {
  createProductValidate(product: IProductDTO): Promise<AssertsShape<Assign<ObjectShape, any>>>;
  updateProductValidate(product: IUpdateProduct): Promise<AssertsShape<Assign<ObjectShape, any>>>
}
