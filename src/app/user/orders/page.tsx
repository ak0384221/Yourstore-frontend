import Fetchfailed from "@/error/fetchFailed";
import ProductInOrder from "@/micro-components/productInOrders";
import { TGetOrderResponse } from "@/types/order";
import { fetchOrderItems } from "@/utils/order/queries/fetchOrders";

export default async function Orders() {
  const response: TGetOrderResponse = await fetchOrderItems();
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

  return (
    <>
      <h1 className="text-center text-4xl font-extrabold capitalize py-5">
        orders
      </h1>
      <div className="px-5">
        {items.map((item) => {
          return <ProductInOrder key={item._id} item={item} />;
        })}
      </div>
    </>
  );
}
