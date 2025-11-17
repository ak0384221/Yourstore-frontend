import RemoveCartItem from "@/atomic-components/removeFromCartButton";
import { fetchCartItem } from "@/utils/cart/fetchCartItem";
import Image from "next/image";
import Link from "next/link";
import { TCartResponse } from "@/types/cartItem";
import {
  calculateTotalAmount,
  calculateTotalPrice,
  finalAmount,
  totalDiscount,
} from "@/utils/product/mutations/pricingFunctions";
import Fetchfailed from "@/error/fetchFailed";
export default async function Cart() {
  const response: TCartResponse = await fetchCartItem();
  const { data: items } = response;
  const { ok } = response;

  if (!ok) {
    return <Fetchfailed fetchcase="Cart" />;
  }

  if (items.length === 0) {
    return (
      <div>
        <p className="text-5xl text-center py-10 text-neutral-700 font-extrabold">
          cart is empty
        </p>
      </div>
    );
  }

  const orderSummary = calculateTotalPrice(items);
  const total = calculateTotalAmount(orderSummary);

  return (
    <>
      <section className="min-h-screen cursor-pointer w-full  text-black py-12 px-6 md:px-16 flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-3xl font-semibold mb-4  border-b border-gray-700 pb-2">
            Your Cart
          </h1>

          {items.map((item) => {
            return (
              <div
                key={item._id}
                className="flex flex-col relative md:flex-row items-center justify-between  rounded-xl p-4 shadow-md border border-gray-300 hover:bg-[#ebf4f5] transition-colors"
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
                    <p className="text-sm text-gray-700">
                      ProductID: {item.product.productId}
                    </p>

                    <p className="text-sm">
                      Size:{" "}
                      <span className="text-black font-medium">
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
                  <p className="text-sm text-black line-through">
                    $ {item.product.basePrice}
                  </p>
                  <p>
                    $
                    {finalAmount(
                      item.product.basePrice,
                      totalDiscount(
                        item.product.discountPercent,
                        item.product.salePercent
                      )
                    ).toFixed(2)}{" "}
                    <span className="text-green-700 font-black text-sm">x</span>{" "}
                    <span>{item.quantity}</span>
                  </p>

                  <p className="font-bold text- text-green-500  ">
                    ${item.finalAmount.toFixed(2)}
                  </p>

                  <p className="text-xs text-red-700">
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
          <div className="w-full md:w-1/3  p-6 rounded-xl shadow-lg border border-gray-300 flex flex-col gap-4 h-max sticky top-20">
            <h2 className="text-2xl font-semibold border-b  pb-2">
              Order Summary
            </h2>

            <div className="flex flex-col gap-3">
              {items.map((item) => {
                return (
                  <div key={item._id} className="flex justify-between text-sm ">
                    <span>{item.product.name}</span>
                    <span>{item.finalAmount.toFixed(2)} $</span>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-gray-700 pt-3 flex justify-between text-lg font-semibold text-black">
              <span>Total</span>
              <span className="text-green-500">{total.toFixed(2)} $</span>
            </div>

            <Link href={"/user/cart/checkout"}>
              <button className="mt-4 w-full py-3 rounded-md  text-white font-medium bg-blue-600 hover:bg-blue-500 hover:text-white transition cursor-pointer">
                Checkout
              </button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
