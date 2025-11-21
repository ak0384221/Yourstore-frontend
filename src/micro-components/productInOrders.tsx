import BuyerInfoLG from "@/app/admin/components/buyerInfoLg";
import OrderItem from "@/app/admin/components/orderItem";
import { TGetOrders } from "@/types/order";

export default function MobileOrder({ item: order }: { item: TGetOrders }) {
  return (
    <>
      <div className=" space-y-4">
        <div className="rounded-lg p-4 shadow-sm space-y-3 text-black">
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
          <BuyerInfoLG buyer={order.buyerInfo} payment={order.paymentMethod} />

          {/* Items */}
          <div className="mt-3  pt-2">
            <p className="text-xl  font-semibold mb-8">Items:</p>

            <div className=" gap-2 flex justify-center flex-wrap">
              {order.items.map((item, index) => {
                return <OrderItem key={index} item={item} />;
              })}
            </div>
          </div>
          <div className="mt-2 text-md text-black  p-1 capitalize flex justify-end gap-2">
            <p>
              <span className="font-medium">Total:</span>{" "}
              {order?.totalAmount.toFixed(2)}{" "}
            </p>
            <p className="text-green-600 font-bold">
              (Shipping Charge {order?.deliveryCharge} tk included)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
