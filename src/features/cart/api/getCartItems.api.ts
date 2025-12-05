import { BASE_URL } from "@/utils/baseApi";
import { fetchFromApi } from "@/utils/product/queries/fetchFromApi";

export async function getCartItems() {
  const response = await fetchFromApi(`${BASE_URL}/api/cart`, {
    noCache: true,
  });
  return response;
}
