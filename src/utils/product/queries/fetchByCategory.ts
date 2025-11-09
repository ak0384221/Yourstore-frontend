import { fetchFromApi } from "./fetchFromApi";
import { BASE_URL } from "@/utils/baseApi";

export async function fetchByCategory(name: string) {
  const response = await fetchFromApi(
    `${BASE_URL}/api/products/category/${name}`
  );
  return response;
}
