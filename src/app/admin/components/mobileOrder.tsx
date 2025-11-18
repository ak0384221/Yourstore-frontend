import BuyerInfoSm from "./buyerInfoSm";
import OrderItem from "./orderItem";

export default function MobileOrder() {
  return (
    <div className="md:hidden space-y-4">
      <div className="border border-neutral-700 rounded-lg p-4 shadow-sm space-y-3">
        {/* Header: Order ID + Status + Button */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-sm">Order ID: ORD-1001</h3>
          <div className="flex items-center gap-2">
            <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
              Delivered
            </span>
            <button className="border px-2 py-1 rounded text-xs">
              Forward
            </button>
          </div>
        </div>

        {/* Buyer Info */}
        <BuyerInfoSm />

        {/* Items */}
        <div className="mt-3 border-t pt-2">
          <p className="text-sm font-semibold mb-2">Items:</p>
          <div className="grid grid-cols-2 gap-2">
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </div>
        </div>

        {/* Total */}
        <div className="mt-3 text-right font-semibold text-sm">
          Total: $249.97
        </div>
      </div>
    </div>
  );
}
