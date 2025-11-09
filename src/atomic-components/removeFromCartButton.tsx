"use client";

import { useRouter } from "next/navigation";

export default function RemoveCartItem({ id }) {
  const router = useRouter();
  async function removeFromCart(id) {
    const res = await fetch(`http://localhost:5000/api/cart/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <button
      onClick={async () => {
        console.log(id);
        await removeFromCart(id);
        router.refresh();
      }}
      className="text-gray-400 hover:text-red-500"
    >
      ✕
    </button>
  );
}
