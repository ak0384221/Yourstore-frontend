"use client";
import { BASE_URL } from "@/utils/baseApi";
import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { BiSolidMinusCircle } from "react-icons/bi";
import { TProduct } from "@/types/product";
import {
  finalAmount,
  totalDiscount,
} from "@/utils/product/mutations/pricingFunctions";
import { sendPostReq } from "@/utils/product/mutations/sendPostReq";

export default function ProductsPcsAdd({ item }: { item: TProduct }) {
  const [productsQuantity, setProductQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("Add to cart");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  function productIncrement() {
    setProductQuantity((prev) => prev + 1);
  }

  function productDecrement() {
    if (productsQuantity > 1) setProductQuantity((prev) => prev - 1);
  }

  function finalprice() {
    const singleItemPrice: number | string = finalAmount(
      item.basePrice,
      totalDiscount(item.discountPercent, item.salePercent)
    );
    if (typeof singleItemPrice === "number") {
      const finalPrice = singleItemPrice * productsQuantity;
      return finalPrice;
    } else {
      return "price calculation error";
    }
  }
  const final = finalprice();

  function handleCart() {
    if (!selectedSize || !selectedColor) {
      setCartMessage("Select all options");
      return;
    }
    const cartObj = {
      product: item._id,
      productId: item.productId,
      quantity: productsQuantity,
      color: selectedColor,
      size: selectedSize,
      finalAmount: final,
    };
    sendPostReq(`${BASE_URL}/api/cart`, cartObj, setCartMessage);
  }

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-6 mt-8 text-black border-1 border-[#cacaca] p-5">
      {/* Variants Selector */}
      {item.variants && item.variants.length > 0 && (
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Choose Options</h3>

          {item.variants.map((variant, index: number) => (
            <div key={index} className="flex flex-col gap-3">
              <span className="font-medium capitalize">
                Size: {variant.size}
              </span>
              <div className="flex gap-3">
                {variant.colors.map((color, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedSize(variant.size);
                      setSelectedColor(color.colorName);
                    }}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color.colorName &&
                      selectedSize === variant.size
                        ? "scale-110 border-white"
                        : "border-gray-500 hover:border-gray-300"
                    }`}
                    style={{ backgroundColor: color.colorName }}
                    title={`${color.colorName} (${color.stock} in stock)`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quantity Selector */}
      <div className="flex items-center gap-3">
        <IoAddCircle
          onClick={productIncrement}
          className="text-4xl cursor-pointer hover:text-gray-300"
        />
        <input
          value={productsQuantity}
          readOnly
          type="number"
          className="h-8 w-12 text-center bg-transparent border border-gray-500 rounded-md focus:outline-none"
        />
        <BiSolidMinusCircle
          onClick={productDecrement}
          className="text-4xl cursor-pointer hover:text-gray-300"
        />
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleCart}
        className="w-max px-8 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-500 cursor-pointer  transition-all "
      >
        {cartMessage}
      </button>

      {/* Selected Details */}
      {(selectedColor || selectedSize) && (
        <p className="text-sm text-gray-400">
          Selected: {selectedSize ? `${selectedSize}, ` : ""}
          {selectedColor ? selectedColor : ""}
        </p>
      )}
    </div>
  );
}
