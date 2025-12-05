import { TGetOrders } from "@/types/order";
import OrderedItemCard from "../composite/OrderedItemCard";

export default function ShowAllOrders({ items }: { items: TGetOrders }) {
  return (
    <>
      <h1 className="text-center text-4xl font-extrabold capitalize py-5">
        orders
      </h1>
      <div className="px-5 space-y-5">
        {items.map((item) => {
          return <OrderedItemCard key={item._id} item={item} />;
        })}
      </div>
    </>
  );
}
