import imagesHelpes from "../helper/imagesHelpes";
import { MulterFile } from "../interfaces/MulterFile";
import { IImage, IImageService } from "./IImageService";

class ImageService implements IImageService {

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
    throw new Error("Method not implemented.");
  }

}

export { ImageService }
