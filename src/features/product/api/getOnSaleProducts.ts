import { fetchFromApi } from "./fetchFromApi";
import { BASE_URL } from "@/features/API/baseApi";

export async function fetchOnSale() {
  const response = await fetchFromApi(
    `${BASE_URL}/api/products/sales?quantity=6`,
    { revalidate: 120 },
  );
  return response;
}
