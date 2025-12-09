import { BASE_URL } from "@/features/API/baseApi";

export async function removeFromCart(id: string) {
  const res = await fetch(`${BASE_URL}/api/cart/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
}
