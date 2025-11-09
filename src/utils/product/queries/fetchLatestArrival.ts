import { fetchFromApi } from "./fetchFromApi";
import { BASE_URL } from "@/utils/baseApi";

export async function fetchlatestArrival() {
  const response = await fetchFromApi(
    `${BASE_URL}/api/products/latest?quantity=5`
  );
  return response;
}
