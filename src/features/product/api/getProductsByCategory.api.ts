import { BASE_URL } from "@/utils/baseApi";
import { fetchFromApi } from "@/utils/product/queries/fetchFromApi";

export async function getProductsByCategory(name: string) {
  const response = await fetchFromApi(
    `${BASE_URL}/api/products/category/${name}`,
    {
      revalidate: 600,
    }
  );
  return response;
}
