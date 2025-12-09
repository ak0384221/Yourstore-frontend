import { BASE_URL } from "@/features/API/baseApi";
import { fetchFromApi } from "../../../features/product/api/fetchFromApi";

export async function getProductsBySearch(string: string) {
  const response = await fetchFromApi(`${BASE_URL}/api/products?q=${string}`);
  return response;
}
