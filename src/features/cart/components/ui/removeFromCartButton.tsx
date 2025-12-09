"use client";

import { useRouter } from "next/navigation";
import { removeFromCart } from "../../api/removeCartItem.api";

export default function RemoveCartItem({ id }: { id: string }) {
  const router = useRouter();

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
