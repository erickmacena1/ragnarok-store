import imagesHelpes from "../../helper/imagesHelpes";
import { MulterFile } from "../../interfaces/MulterFile";
import { IImage, IImageService } from "./IImageService";
import aws from 'aws-sdk'
import { promisify } from 'util'
import fs from 'fs'
import path from 'path'
import { IImageRepository } from "../../repositories/imageRepository/IImageRepository";
import { Image } from ".prisma/client";

class ImageService implements IImageService {

  private s3 = new aws.S3()

  constructor(
    private imageRepository: IImageRepository
  ) {}

  saveImage(image: MulterFile): IImage {

    const {
      filename,
      location,
      key
    } = image

    return {
      url: location || imagesHelpes.getLocalUrl(filename ? filename : ''),
      key: String(key || filename)
    } as IImage

  }

  deleteImage(key: string): void {
    if (process.env.DEV_PORT) {
      promisify(fs.unlink)(
        path.resolve(__dirname, '..', '..', '..', '..','uploads', key)
      )
    } else {
      this.s3.deleteObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key
      }).promise()
    }
  }

  async deleteImageOnUpdate(id: string): Promise<Image> {

    const image = await this.imageRepository.findProductImage(id)

    return image
  }

}

export { ImageService }
