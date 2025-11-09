import { fetchFromApi } from "../product/queries/fetchFromApi";
import { BASE_URL } from "@/utils/baseApi";

export async function fetchCartItem() {
  const response = await fetchFromApi(`${BASE_URL}/api/cart`);
  return response;
}
