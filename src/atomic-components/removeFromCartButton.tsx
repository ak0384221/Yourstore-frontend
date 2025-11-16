"use client";

import { useRouter } from "next/navigation";

export default function RemoveCartItem({ id }: { id: string }) {
  const router = useRouter();
  async function removeFromCart(id: string) {
    const res = await fetch(`http://localhost:5000/api/cart/${id}`, {
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
      className="text-cartItemRemoveBtn  hover:bg-pink-600 hover:text-white
        absolute -top-4 rounded-full bg-white size-8 -right-2 text-xl cursor-pointer transition-colors"
    >
      ✕
    </button>
  );
}
