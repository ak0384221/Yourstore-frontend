import { TGetCartItem } from "@/types/cartItem";

export default function OrderSummary({
  items,
  total,
}: {
  items: TGetCartItem[];
  total: number;
}) {
  return (
    <div className="border border-neutral-300 rounded-xl p-4 flex flex-col gap-2">
      {/* Items List */}
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item?._id}
            className="flex justify-between items-center text-sm bg-white p-2 rounded-md shadow-sm"
          >
            <span className="text-gray-800 font-medium">
              {item?.product?.name} × {item?.quantity}
            </span>
            <span className="text-gray-700 font-semibold">
              {item?.finalAmount.toFixed(2)} $
            </span>
          </div>
        ))}
      </div>

      {/* Shipping Charge */}
      <div className="flex justify-between text-sm  pt-3">
        <span className="text-gray-600 font-light tracking-wider text-xs pl-1 ">
          Shipping Charge
        </span>
        <span className="text-gray-700 font-semibold">5 $</span>
      </div>

      {/* Total */}
      <div className="flex justify-between text-lg font-semibold text-black  pt-3">
        <span>Total</span>
        <span className="text-green-600">{(total + 5).toFixed(2)} $</span>
      </div>
    </div>
  );
}
