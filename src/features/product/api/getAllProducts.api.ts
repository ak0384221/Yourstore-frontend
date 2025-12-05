import { BASE_URL } from "@/utils/baseApi";
import { fetchFromApi } from "@/utils/product/queries/fetchFromApi";

export async function getAllProducts() {
  const response = await fetchFromApi(`${BASE_URL}/api/products`, {
    revalidate: 600,
  });
  return response;
}
