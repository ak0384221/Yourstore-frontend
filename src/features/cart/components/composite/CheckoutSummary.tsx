import { TGetCartItem } from "@/types/cartItem";
import Link from "next/link";

export default function CheckoutSummary({
  items,
  total,
}: {
  items: TGetCartItem[];
  total: number;
}) {
  return (
    <>
      {items.length > 0 && (
        <div className="w-full md:w-1/3  p-6 rounded-xl shadow-lg border border-gray-300 flex flex-col gap-4 h-max sticky top-20">
          <h2 className="text-2xl font-semibold border-b  pb-2">
            Checkout Summary
          </h2>

          <div className="flex flex-col gap-2">
            {items.map((item) => {
              return (
                <div key={item._id} className="flex justify-between text-sm ">
                  <span>{item.product.name}</span>
                  <span>{item.finalAmount?.toFixed(2)} $</span>
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
    </>
  );
}
