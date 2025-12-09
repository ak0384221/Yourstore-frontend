import { BASE_URL } from "@/features/API/baseApi";
import { fetchFromApi } from "./fetchFromApi";

export async function getProductById(id: string) {
  const response = await fetchFromApi(`${BASE_URL}/api/products/${id}`);
  return response;
}
