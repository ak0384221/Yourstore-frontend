"use client";
import { BASE_URL } from "@/utils/baseApi";
import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { BiSolidMinusCircle } from "react-icons/bi";
import { TGetProduct } from "@/types/product";
import {
  finalAmount,
  totalDiscount,
} from "@/utils/product/mutations/pricingFunctions";
import { sendPostReq } from "@/utils/product/mutations/sendPostReq";
import { TPostCartItem } from "@/types/cartItem";

export default function ProductsPcsAdd({ item }: { item: TGetProduct }) {
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
    const singleItemPrice: number = finalAmount(
      item.basePrice,
      totalDiscount(item.discountPercent, item.salePercent)
    );
    const finalPrice = singleItemPrice * productsQuantity;
    return finalPrice;
  }
  const final = finalprice();

  function handleCart() {
    if (!selectedSize || !selectedColor) {
      setCartMessage("select size & color");
      return;
    }
    const cartObj: TPostCartItem = {
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
          <h3 className="text-lg font-semibold">Select size & color</h3>

          {item.variants.map((variant, index: number) => (
            <div key={index} className="space-y-2">
              {/* Size Radio */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  value={variant.size}
                  checked={selectedSize === variant.size}
                  onChange={() => setSelectedSize(variant.size)}
                  className="accent-black"
                />
                <span className="font-medium">{variant.size}</span>
              </label>

              {/* Color Radios */}
              <div className="flex gap-3">
                {variant.colors.map((color, idx: number) => (
                  <label
                    key={idx}
                    className="flex items-center gap-1 cursor-pointer"
                    title={`${color.colorName} (${color.stock} in stock)`}
                  >
                    <input
                      type="radio"
                      name={`color-${variant.size}`}
                      value={color.colorName}
                      checked={
                        selectedColor === color.colorName &&
                        selectedSize === variant.size
                      }
                      onChange={() => {
                        setSelectedSize(variant.size);
                        setSelectedColor(color.colorName);
                      }}
                      className="accent-black"
                    />
                    <span>{color.colorName}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {(selectedColor || selectedSize) && (
        <p className="text-sm text-red-600 font-bold">
          Selected: {selectedSize ? `${selectedSize}, ` : ""}
          {selectedColor ? selectedColor : ""}
        </p>
      )}

      {/* Quantity Selector */}
      <div className="flex items-center gap-3">
        <IoAddCircle
          onClick={productIncrement}
          className="text-4xl cursor-pointer text-blue-500 hover:text-blue-600 transition-colors"
        />
        <input
          value={productsQuantity}
          readOnly
          type="number"
          className="h-8 w-12 text-center bg-transparent border border-gray-500 rounded-md focus:outline-none"
        />
        <BiSolidMinusCircle
          onClick={productDecrement}
          className="text-4xl cursor-pointer text-blue-500 hover:text-blue-600 transition-colors"
        />
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleCart}
        className="w-full px-2 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 cursor-pointer  transition-all capitalize "
      >
        {cartMessage}
      </button>

      {/* Selected Details */}
    </div>
  );
}
