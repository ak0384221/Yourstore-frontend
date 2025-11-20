import { BASE_URL } from "@/utils/baseApi";
import { fetchFromApi } from "@/utils/product/queries/fetchFromApi";

export async function fetchOrderItems() {
  const response = await fetchFromApi(`${BASE_URL}/api/orders`, {
    noCache: true,
  });
  return response;
}
