// import { TGetOrderResponse } from "@/features/order/types/order";
// import LargeScreenOrder from "./components/largeScreenOrder";
// import Fetchfailed from "@/error/fetchFailed";
// import { getOrderItems } from "@/features/order/api/getOrders.api";

export default async function AdminPage() {
  // const response: TGetOrderResponse = await getOrderItems();
  // const { data: items } = response;
  // const { ok } = response;

  // if (!ok) {
  //   return <Fetchfailed fetchcase="Order" />;
  // }

  // if (items.length === 0) {
  //   return (
  //     <div>
  //       <p className="text-5xl text-center py-10 text-neutral-700 font-extrabold">
  //         Order is empty
  //       </p>
  //     </div>
  //   );
  // }
  return (
    <>
      {/* <LargeScreenOrder items={items} /> */}
      <h1 className="text-black text-xl font-bold text-center my-10 capitalize">
        under developement.
      </h1>
    </>
  );
}
