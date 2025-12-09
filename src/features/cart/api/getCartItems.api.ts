import { BASE_URL } from "@/features/API/baseApi";
import { fetchFromApi } from "@/features/product/api/fetchFromApi";

export async function getCartItems() {
  const response = await fetchFromApi(`${BASE_URL}/api/cart`, {
    noCache: true,
  });
  return response;
}
