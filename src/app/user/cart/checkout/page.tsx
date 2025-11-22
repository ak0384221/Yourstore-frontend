import Fetchfailed from "@/error/fetchFailed";
import { TGetCartResponse } from "@/types/cartItem";
import { fetchCartItem } from "@/utils/cart/fetchCartItem";
import {
  calculateTotalAmount,
  calculateTotalPrice,
} from "@/utils/product/mutations/pricingFunctions";
import CheckoutForm from "./ShippingForm";
import { TPostOrderItem } from "@/types/order";

export default async function Checkout() {
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

  const orderedItems = items.map((item) => {
    const orders: TPostOrderItem = {
      _id: item.product._id,
      productId: item.product.productId,
      images: item.product.images,
      name: item.product.name,
      category: item.product.category,
      size: item.size,
      brand: item.product.brand,
      color: item.color,
      basePrice: item.product.basePrice,
      discountPercent: item.product.discountPercent,
      salePercent: item.product.salePercent,
      finalPrice: item.product.finalPrice,
      quantity: item.quantity,
      totalPrice: item.finalAmount,
    };
    return orders;
  });

  return (
    <>
      <div className="min-h-screen bg-white text-black py-10 px-4 flex justify-center">
        <div className="w-full max-w-4xl flex flex-col gap-8">
          {/* --- Order Summary --- */}
          <div className="border border-neutral-300 rounded-xl p-4 flex flex-col gap-2">
            {/* Items List */}
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <div
                  key={item?._id}
                  className="flex justify-between items-center text-sm bg-white p-2 rounded-md shadow-sm"
                >
                  <span className="text-gray-800 font-medium">
                    {item?.product?.name} × {item?.quantity}
                  </span>
                  <span className="text-gray-700 font-semibold">
                    {item?.finalAmount.toFixed(2)} $
                  </span>
                </div>
              ))}
            </div>

            {/* Shipping Charge */}
            <div className="flex justify-between text-sm  pt-3">
              <span className="text-gray-700 font-medium">Shipping Charge</span>
              <span className="text-gray-700 font-semibold">5 $</span>
            </div>

            {/* Total */}
            <div className="flex justify-between text-lg font-semibold text-black  pt-3">
              <span className="text-red-500">Total</span>
              <span className="text-green-600">{(total + 5).toFixed(2)} $</span>
            </div>
          </div>

          <CheckoutForm orderedItems={orderedItems} total={total} />
        </div>
      </div>
    </>
  );
}
