import { fetchFromApi } from "./fetchFromApi";
import { BASE_URL } from "@/utils/baseApi";

export async function fetchBySearch(string: string) {
  const response = await fetchFromApi(`${BASE_URL}/api/products?q=${string}`);
  return response;
}
