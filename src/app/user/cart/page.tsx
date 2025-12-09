import { TGetCartResponse } from "@/features/cart/types/cartItem";
import Fetchfailed from "@/error/fetchFailed";
import { getCartItems } from "@/features/cart/api/getCartItems.api";
import CartSingleItem from "@/features/cart/components/composite/cartSingleItem";
import CheckoutSummary from "@/features/cart/components/composite/CheckoutSummary";
import {
  calculateTotalAmount,
  calculateTotalPrice,
} from "@/features/utils/pricingFunctions";

export default async function Cart() {
  const response: TGetCartResponse = await getCartItems();
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
      <section className=" cursor-pointer w-full  text-black py-12 px-6 md:px-16 flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-3xl font-semibold mb-4  border-b border-gray-700 pb-2">
            Your Cart
          </h1>

          {items.map((item) => {
            return <CartSingleItem key={item._id} item={item} />;
          })}
        </div>

        <CheckoutSummary items={items} total={total} />
      </section>
    </>
  );
}
