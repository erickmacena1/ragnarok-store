import { IImage } from "../services/IImageService";

export interface IProductDTO {
  name: string;
  description: string;
  image: IImage;
  value: number;
}
