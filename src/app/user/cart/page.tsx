import { fetchCartItem } from "@/utils/cart/fetchCartItem";
import Link from "next/link";
import { TGetCartResponse } from "@/types/cartItem";
import {
  calculateTotalAmount,
  calculateTotalPrice,
} from "@/utils/product/mutations/pricingFunctions";
import Fetchfailed from "@/error/fetchFailed";
import ProductInCarts from "@/micro-components/productsShowcaseInCart";

export default async function Cart() {
  const response: TGetCartResponse = await fetchCartItem();
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
            return <ProductInCarts key={item._id} item={item} />;
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
                    <span>{item.finalAmount} $</span>
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
