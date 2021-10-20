import imagesHelpes from "../../helper/imagesHelpes";
import { MulterFile } from "../../interfaces/MulterFile";
import { IImage, IImageService } from "./IImageService";
import aws from 'aws-sdk'
import { promisify } from 'util'
import fs from 'fs'
import path from 'path'

class ImageService implements IImageService {

  private s3 = new aws.S3()

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

  deleteImageOnUpdate(id: string): void {



  }

}

export { ImageService }
