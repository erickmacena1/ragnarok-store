import { Decimal } from "@prisma/client/runtime";
import Stripe from "stripe";
import { ICheckoutService } from "./ICheckoutService";

class CheckoutService implements ICheckoutService {
  private stripe = new Stripe(process.env.STRIPE_API_TOKEN, {
    apiVersion: "2020-08-27",
  });

  async getProductCheckout(
    name: string,
    description: string,
    amount: string | number | Decimal,
    imageUrl: string
  ): Promise<string> {
    const { url } = await this.stripe.checkout.sessions.create({
      line_items: [
        {
          name,
          amount: Number(amount),
          description,
          images: [imageUrl ? imageUrl : ""],
          currency: "brl",
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      mode: "payment",
      success_url: process.env.SUCCES_URL,
      cancel_url: process.env.CANCEL_URL,
    });

    if (url === null)
      throw Error("Não foi possível criar o checkout do produto!");

    return url;
  }
}

export { CheckoutService }
