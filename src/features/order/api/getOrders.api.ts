import { BASE_URL } from "@/features/API/baseApi";
import { fetchFromApi } from "@/features/product/api/fetchFromApi";

export async function getOrderItems() {
  const response = await fetchFromApi(`${BASE_URL}/api/orders`, {
    noCache: true,
  });
  return response;
}
