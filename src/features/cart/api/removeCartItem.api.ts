import { PUBLIC_URL } from "@/features/API/baseApi";

export async function removeFromCart(id: string) {
  const res = await fetch(`${PUBLIC_URL}/api/cart/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();
  console.log("remove cart item api,", data);
}
