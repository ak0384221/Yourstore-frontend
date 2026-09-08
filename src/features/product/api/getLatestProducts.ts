import { BASE_URL } from "@/features/API/baseApi";
import { fetchFromApi } from "./fetchFromApi";

export async function getLatestProducts(quantity = 0) {
  if (quantity === 0) {
    const response = await fetchFromApi(`${BASE_URL}/api/products/latest`, {
      revalidate: 120,
    });
    return response;
  }
  const response = await fetchFromApi(
    `${BASE_URL}/api/products/latest?quantity=${quantity}`,
    { revalidate: 120 },
  );
  return response;
}
