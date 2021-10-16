import { Decimal } from "@prisma/client/runtime";

export interface ICheckoutService {
  getProductCheckout(
    name: string,
    description: string,
    amount: string | number | Decimal,
    imageUrl: string
  ): Promise<string>;
}
