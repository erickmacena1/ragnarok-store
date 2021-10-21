import { Image } from ".prisma/client"
import { prisma } from "../../../config/client"
import { IImageRepository } from "./IImageRepository"

class ImageRepository implements IImageRepository {

  async findProductImage(productId: string): Promise<Image> {
    const image = await prisma.image.findFirst({
      where: {
        productId
      }
    })

    if (!image) throw Error('Image not found!')

    return image
  }

}

export { ImageRepository }
