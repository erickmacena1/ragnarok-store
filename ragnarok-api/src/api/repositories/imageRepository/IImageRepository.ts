import { Image } from ".prisma/client";

export interface IImageRepository {
  findProductImage(productId: string): Promise<Image>
}
