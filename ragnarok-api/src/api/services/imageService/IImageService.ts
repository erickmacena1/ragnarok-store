import { MulterFile } from "../../interfaces/MulterFile";

export interface IImageService {
  saveImage(image: MulterFile): IImage;
  deleteImage(key: string): void;
  deleteImageOnUpdate(id: string): void
}

export interface IImage {
  url: string;
  key: string;
}
