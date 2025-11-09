import { fetchFromApi } from "./fetchFromApi";
import { BASE_URL } from "@/utils/baseApi";

export async function fetchById(id: string) {
  const response = await fetchFromApi(`${BASE_URL}/api/products/${id}`);
  return response[0];
}
