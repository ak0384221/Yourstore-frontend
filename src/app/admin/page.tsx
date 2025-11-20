import { TOrderResponse } from "@/types/order";
import LargeScreenOrder from "./components/largeScreenOrder";
import { fetchOrderItems } from "@/utils/order/queries/fetchOrders";
import Fetchfailed from "@/error/fetchFailed";

export default async function AdminPage() {
  const response: TOrderResponse = await fetchOrderItems();
  const { data: items } = response;
  const { ok } = response;

  if (!ok) {
    return <Fetchfailed fetchcase="Order" />;
  }

  if (items.length === 0) {
    return (
      <div>
        <p className="text-5xl text-center py-10 text-neutral-700 font-extrabold">
          Order is empty
        </p>
      </div>
    );
  }
  return (
    <>
      <LargeScreenOrder items={items} />
    </>
  );
}
