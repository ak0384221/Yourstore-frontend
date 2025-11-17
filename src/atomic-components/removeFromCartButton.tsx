"use client";

import { BASE_URL } from "@/utils/baseApi";
import { useRouter } from "next/navigation";

export default function RemoveCartItem({ id }: { id: string }) {
  const router = useRouter();
  async function removeFromCart(id: string) {
    const res = await fetch(`${BASE_URL}/api/cart/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
  }
  return (
    <button
      onClick={async () => {
        await removeFromCart(id);
        router.refresh();
      }}
      className=" bg-blue-600 text-white hover:bg-blue-500
        absolute -top-4 rounded-full  size-8 -right-2 text-xl cursor-pointer transition-colors"
    >
      ✕
    </button>
  );
}
