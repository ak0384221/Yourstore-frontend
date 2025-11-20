import { fetchFromApi } from "./fetchFromApi";
import { BASE_URL } from "@/utils/baseApi";

export async function fetchAllProduct() {
  const response = await fetchFromApi(`${BASE_URL}/api/products`, {
    revalidate: 600,
  });
  return response;
}
