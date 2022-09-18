import axios from "axios";

export default class ImageService {
  static async getAll() {
    const response = await axios.get(`get_memes`);
    return response.data.data.memes;
  }
}
