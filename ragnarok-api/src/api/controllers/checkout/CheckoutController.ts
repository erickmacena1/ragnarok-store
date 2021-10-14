import { Request, response, Response } from "express";
import { prisma } from "../../../config/client";
import Stripe from 'stripe'
import { IProduct } from "../../repositories/IProductRepository";

class CheckoutController {

  private stripe = new Stripe(process.env.STRIPE_API_TOKEN, {
    apiVersion: '2020-08-27'
  });

  async getCheckout(req: Request, res: Response) {

    const { id } = req.params

    const product = await prisma.product.findFirst({
      where: {
        id
      },
      include: {
        image: {
          select: {
            url: true
          }
        }
      }
    }) as IProduct

    const {
      name,
      description,
      value
    } = product

    const {
      url: ImageUrl
    } = product.image

    const { url } = await this.stripe.checkout.sessions.create({
      line_items: [
        {
          name,
          amount: 6970,
          description,
          images: [
            ImageUrl ? ImageUrl : ''
          ],
          currency: 'brl',
          quantity: 1
        },
      ],
      payment_method_types: [
        'card'
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel'
    })

    if (url === null) return res.json({ message: 'falhou' })
    console.log(url)
    return res.redirect(303, url)
  }
}

export { CheckoutController }
