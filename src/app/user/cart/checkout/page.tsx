import Fetchfailed from "@/error/fetchFailed";
import { TGetCartResponse } from "@/types/cartItem";
import { fetchCartItem } from "@/utils/cart/fetchCartItem";
import {
  calculateTotalAmount,
  calculateTotalPrice,
} from "@/utils/product/mutations/pricingFunctions";
import { TPostOrderItem } from "@/types/order";
import PlaceOrderPage from "@/features/order/components/common/PlaceOrderPage";

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
        <PlaceOrderPage
          items={items}
          total={total}
          orderedItems={orderedItems}
        />
      </div>
    </>
  );
}
