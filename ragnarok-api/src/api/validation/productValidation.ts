import * as yup from 'yup'
import { IProduct } from "../interfaces/IProduct";
import { IUpdateProduct } from '../interfaces/IUpdateProduct';
import { IProductValidation } from './IProductValidation';

class ProductValidation implements IProductValidation {

  async createProductValidate(product: IProduct) {
    const productSchema = yup.object().shape({
      name: yup.string().required(),
      description: yup.string().required(),
      image: yup.string().required(),
      value: yup.number().required()
    })

    return await productSchema.validate(product, {
      abortEarly: false
    })
  }

  async updateProductValidate(product: IUpdateProduct) {
    const productSchema = yup.object().shape({
      name: yup.string().notRequired(),
      description: yup.string().notRequired(),
      image: yup.string().notRequired(),
      value: yup.number().notRequired()
    })

    return await productSchema.validate(product, {
      abortEarly: false
    })
  }

}

export { ProductValidation }
