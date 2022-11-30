import config from "../config.json";
import http from "./httpService";

export async function GetImages(page, limit, category) {
  return await http.get(
    `${config.apiUrl}/paginate?page=${page}&limit=${limit}&category=${category}`
  );
}
const ImageserMethods = { GetImages };
export default ImageserMethods;
