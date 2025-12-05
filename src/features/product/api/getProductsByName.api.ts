import { BASE_URL } from "@/utils/baseApi";
import { fetchFromApi } from "@/utils/product/queries/fetchFromApi";

export async function getProductsByName() {
  const response = await fetchFromApi(`${BASE_URL}/api/getProductsName`, {
    revalidate: 600,
  });
  return response;
}
