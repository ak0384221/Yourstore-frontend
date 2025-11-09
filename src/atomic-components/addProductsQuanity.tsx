"use client";
import { useState } from "react";

import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";

export default function ProductsPcsAdd({ item }: any) {
  const [productsQuantity, setProductQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("Add to cart");
  function productIncrement() {
    setProductQuantity((prev) => prev + 1);
  }
  function productDecrement() {
    if (productsQuantity > 1) {
      setProductQuantity((prev) => prev - 1);
    }
  }

  async function sendCartToBackend(cartObj: object) {
    fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Cart saved:", data);
        setCartMessage(() => "Item is Added");
      })
      .catch((err) => {
        console.log("Error saving cart:", err);
        setCartMessage(() => "failed");
      });
  }
  function handleCart() {
    const cartObj = {
      productId: item._id,
      quantity: productsQuantity,
    };
    sendCartToBackend(cartObj);
  }
  return (
    <>
      <div className="products quanity  w-[10rem] flex justify-center gap-2 items-center">
        <FaSquarePlus
          onClick={productIncrement}
          className="text-4xl cursor-pointer text-green-600"
        />

        <input
          value={productsQuantity}
          readOnly
          type="number"
          className="  h-8 text-center  border-neutral-400 bg-white text-black size-10 focus:outline-0"
        />

        <FaSquareMinus
          onClick={productDecrement}
          className="text-4xl cursor-pointer text-red-500"
        />
      </div>
      <div className="">
        <button
          onClick={handleCart}
          className="px-3 py-2 bg-blue-400 text-white cursor-pointer active:bg-red-500 "
        >
          {cartMessage}
        </button>
      </div>
    </>
  );
}
