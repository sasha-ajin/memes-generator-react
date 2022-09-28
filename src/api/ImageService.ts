import axios from "axios";
import { ImageCreateBody } from "types/ImageCreateBody";
export default class ImageService {
  static async getAll() {
    const response = await axios.get(`get_memes`);
    return response.data.data.memes;
  }
  static async create(imageCreateBody: ImageCreateBody) {
    const response = await axios.post(`caption_image`, imageCreateBody, {});
    return response;
  }
}
