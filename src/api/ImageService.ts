import axios from "axios";
import { ImageCreateBody } from "types/ImageCreateBody";
export default class ImageService {
  static async getAll() {
    const response = await axios.get(`get_memes`);
    return response.data.data.memes;
  }
}
