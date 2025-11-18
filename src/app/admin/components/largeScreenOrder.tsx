import BuyerInfoLG from "./buyerInfoLg";
import OrderItem from "./orderItem";

export default function LargeScreenOrder() {
  return (
    <table className="hidden md:table w-full border-collapse text-sm bg-[#181818] text-white">
      <thead className="text-left">
        <tr className="border-b-1">
          <th className="p-3">Order ID</th>
          <th className="p-3">Items</th>
          <th className="p-3">Buyer Info</th>
          <th className="p-3">Total</th>
          <th className="p-3">Status</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b">
          {/* Order ID */}
          <td className="p-3 font-semibold">ORD-1001</td>

          {/* Items */}
          <td className="p-3 border columns-2">
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </td>

          {/* Buyer Info */}
          <BuyerInfoLG />

          {/* Total */}
          <td className="p-3 font-semibold">$249.97</td>

          {/* Status */}
          <td className="p-3">
            <div className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs w-max">
              Delivered
            </div>
            <button className="border p-1 px-2 my-2">forward</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
