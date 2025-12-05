import { BASE_URL } from "@/utils/baseApi";
import { fetchFromApi } from "@/utils/product/queries/fetchFromApi";

export async function getProductById(id: string) {
  const response = await fetchFromApi(`${BASE_URL}/api/products/${id}`);
  return response;
}
