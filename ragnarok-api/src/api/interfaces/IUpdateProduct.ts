import { IImage } from "../services/imageService/IImageService";

export interface IUpdateProduct {
  name?: string;
  description?: string;
  image?: IImage;
  value?: number;
}
