import { TGetCartItem } from "@/types/cartItem";
import OrderForm from "../composite/OrderForm";
import OrderSummary from "../composite/OrderSummary";
import { TPostOrderItem } from "@/types/order";

export default function PlaceOrderPage({
  items,
  total,
  orderedItems,
}: {
  items: TGetCartItem[];
  total: number;
  orderedItems: TPostOrderItem[];
}) {
  return (
    <div className="w-full max-w-4xl flex flex-col gap-8">
      {/* --- Order Summary --- */}
      <h1 className="text-2xl font-light">
        <center>Order Summary</center>
      </h1>
      <OrderSummary items={items} total={total} />
      <OrderForm orderedItems={orderedItems} total={total} />
    </div>
  );
}
