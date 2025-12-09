import { BASE_URL } from "@/features/API/baseApi";
import { fetchFromApi } from "./fetchFromApi";

export async function getAllProducts() {
  const response = await fetchFromApi(`${BASE_URL}/api/products`, {
    revalidate: 600,
  });
  return response;
}
