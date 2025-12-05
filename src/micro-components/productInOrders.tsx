import BuyerInfoLG from "@/app/admin/components/buyerInfoLg";
import OrderItem from "@/app/admin/components/orderItem";
import BuyerInfoInOrderedItems from "@/features/order/components/composite/BuyerInfoInOrderdItem";
import OrderedItemCard from "@/features/order/components/composite/OrderedItemCard";
import { TGetOrders } from "@/types/order";

export default function MobileOrder({ item: order }: { item: TGetOrders }) {
  return (
    <>
      <div>
        <div className="rounded-lg p-4 shadow-md border border-neutral-200  text-black ">
          {/* Header: Order ID + Status + Forward Button */}

          <div className=" flex gap-2  w-max">
            <h3 className="font-semibold text-sm">Order ID : {order?._id} </h3>

            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs capitalize">
                {order.orderStatus}
              </span>
            </div>
          </div>

          {/* Buyer Info */}
          <BuyerInfoInOrderedItems
            buyer={order.buyerInfo}
            payment={order.paymentMethod}
          />

          {/* Items */}
          <div>
            <p className="text-xl  font-semibold mb-5">Items:</p>

            <div className=" gap-2 flex justify-start flex-wrap">
              {order.items.map((item, index) => {
                return <OrderedItemCard key={index} item={item} />;
              })}
            </div>
          </div>

          <div className="mt-2 text-md text-black   capitalize flex gap-2  items-center">
            <p>
              <span className="font-medium">Total : </span>
              <span className="font-extrabold text-green-600">
                {order?.totalAmount.toFixed(2)}$
              </span>
            </p>
            <p className="text-black/70 font-bold text-xs">
              (Shipping Charge ${order?.deliveryCharge} included)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
