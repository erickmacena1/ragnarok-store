import { IImage } from "../services/IImageService";

export interface IProduct {
  name: string;
  description: string;
  image: IImage;
  value: number;
}
