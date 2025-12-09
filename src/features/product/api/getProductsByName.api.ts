import { BASE_URL } from "@/features/API/baseApi";
import { fetchFromApi } from "./fetchFromApi";

export async function getProductsByName() {
  const response = await fetchFromApi(`${BASE_URL}/api/getProductsName`, {
    revalidate: 600,
  });
  return response;
}
