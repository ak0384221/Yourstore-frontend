import { BASE_URL } from "@/features/API/baseApi";
import { fetchFromApi } from "./fetchFromApi";

export async function getProductsByCategory(name: string) {
  const response = await fetchFromApi(
    `${BASE_URL}/api/products/category/${name}`,
    {
      revalidate: 600,
    }
  );
  return response;
}
