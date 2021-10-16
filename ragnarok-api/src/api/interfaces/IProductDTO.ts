import { IImage } from "../services/imageService/IImageService";

export interface IProductDTO {
  name: string;
  description: string;
  image: IImage;
  value: number;
}
