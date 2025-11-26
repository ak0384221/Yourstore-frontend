// http://localhost:5000/api/getProductsName

import { fetchFromApi } from "./fetchFromApi";
import { BASE_URL } from "@/utils/baseApi";

export async function fetchProductsName() {
  const response = await fetchFromApi(`${BASE_URL}/api/getProductsName`, {
    revalidate: 600,
  });
  return response;
}
