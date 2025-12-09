import Fetchfailed from "@/error/fetchFailed";
import { getOrderItems } from "@/features/order/api/getOrders.api";
import ShowSingleOrder from "@/features/order/components/composite/ShowSingleOrder";
import { TGetOrderResponse } from "@/features/order/types/order";

export default async function Orders() {
  const response: TGetOrderResponse = await getOrderItems();
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
      <h1 className="text-center text-4xl font-extrabold capitalize py-5">
        orders
      </h1>
      <div className="px-5 space-y-5">
        {items.map((item) => {
          return <ShowSingleOrder key={item._id} item={item} />;
        })}
      </div>
    </>
  );
}
