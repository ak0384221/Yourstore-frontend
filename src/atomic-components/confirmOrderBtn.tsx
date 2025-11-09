"use client";

import { useState } from "react";

export default function ConfirmOrder({ items }: any) {
  console.log(items);
  const [orderNotify, setOrderNotify] = useState("Confirm Order");

  const newOrders = items?.map((item: any) => {
    return { productId: item?.productId?._id, quantity: item?.quantity };
  });
  console.log("--------------new", newOrders);

  async function handleOrders() {
    fetch("http://localhost:5000/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("order placed:", data);
        setOrderNotify(() => "Order succeed");
      })
      .catch((err) => {
        console.log("Order failed:", err);
        setOrderNotify(() => "Order failed");
      });
  }

  return (
    <button
      onClick={handleOrders}
      className="mt-4 w-full bg-[#4B3D8F] text-white py-3 rounded hover:bg-[#3b2f72] transition cursor-pointer"
    >
      Confirm order
    </button>
  );
}
