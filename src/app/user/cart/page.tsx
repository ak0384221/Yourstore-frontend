import RemoveCartItem from "@/atomic-components/removeFromCartButton";
import { fetchCartItem } from "@/utils/cart/fetchCartItem";
import Image from "next/image";
import Link from "next/link";
import { TCartResponse } from "@/types/cartItem";
import {
  finalAmount,
  totalDiscount,
} from "@/utils/product/mutations/pricingFunctions";
export default async function Cart() {
  const response: TCartResponse = await fetchCartItem();
  const { data: items } = response;

  return (
    <>
      <section className="min-h-screen w-full bg-[#0b0b0b] text-gray-200 py-12 px-6 md:px-16 flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-3xl font-semibold mb-4  border-b border-gray-700 pb-2">
            Your Cart
          </h1>

          {items.map((item) => {
            return (
              <div
                key={item._id}
                className="flex flex-col relative md:flex-row items-center justify-between bg-[#1a1a1a] rounded-xl p-4 shadow-md border border-gray-800"
              >
                <RemoveCartItem id={item._id} />
                <div className="flex items-center gap-5 w-full md:w-auto ">
                  <div className="relative w-28 h-28 rounded-md overflow-hidden">
                    <Image
                      src={item.product.images[0].url || "/placeholder.png"}
                      alt={item.product.name}
                      fill
                      className="object-cover bg-[#e3f1f5]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold">
                      {item.product.name}
                    </h2>
                    <p className="text-sm text-gray-400">
                      ProductID: {item.product.productId}
                    </p>

                    <p className="text-sm">
                      Size:{" "}
                      <span className="text-gray-300 font-medium">
                        {item.size || "—"}
                      </span>
                    </p>
                    <p className="text-sm">
                      Color:{" "}
                      <span className="inline-block  ml-1">{item.color}</span>
                    </p>
                    <p className="text-sm">Qty: {item.quantity}</p>
                  </div>
                </div>

                <div className="mt-3 md:mt-0 text-right  ">
                  <p className="text-sm text-gray-400 line-through">
                    $ {item.product.basePrice}
                  </p>

                  <p className="font-bold text- text-green-500  ">
                    ${" "}
                    {finalAmount(
                      item.product.basePrice,
                      totalDiscount(
                        item.product.discountPercent,
                        item.product.salePercent
                      )
                    )}
                  </p>

                  <p className="text-xs text-yellow-400">
                    {totalDiscount(
                      item.product.discountPercent,
                      item.product.salePercent
                    )}
                    % off
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {items.length > 0 && (
          <div className="w-full md:w-1/3 bg-[#161616] p-6 rounded-xl shadow-lg border border-gray-800 flex flex-col gap-4 h-max sticky top-20">
            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
              Order Summary
            </h2>

            <div className="flex flex-col gap-3">
              {items.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="flex justify-between text-sm text-gray-300"
                  >
                    <span>{item.product.name}</span>
                    <span>
                      {finalAmount(
                        item.product.basePrice,
                        totalDiscount(
                          item.product.discountPercent,
                          item.product.salePercent
                        )
                      )}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-gray-700 pt-3 flex justify-between text-lg font-semibold text-white">
              <span>Total</span>
              {/* <span>${totalPrice.toFixed(2)}</span> */}
            </div>

            <Link href={"/user/cart/checkout"}>
              <button className="mt-4 w-full py-3 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition">
                Checkout
              </button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
