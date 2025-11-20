import Link from "next/link";
import { TOrders } from "@/types/order";

export default function LargeScreenOrder({
  items: orders,
}: {
  items: TOrders[];
}) {
  return (
    <div className="w-full overflow-x-auto mt-5">
      <table className="min-w-full table-fixed border border-gray-300 text-sm text-black ">
        <thead className="bg-gray-100">
          <tr className="text-left">
            <th className="p-3 border text-center w-1/5">Order</th>
            <th className="p-3 border text-center w-3/5 ">Items</th>
            <th className="p-3 border text-center w-1/5 ">Buyer Info</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="border-b">
              {/* ORDER INFO */}
              <td className="p-1 border align-top ">
                <p className="font-semibold text-gray-900">
                  <p className="">Order Id </p>
                  <p className="break-all"> {order._id}</p>
                </p>

                {/* Status */}
                <span className="mt-1 inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                  {order.orderStatus}
                </span>

                {/* Buttons */}
                <div className="flex flex-wrap gap-1 mt-3 ">
                  <button className="bg-blue-400 text-white border px-2 py-1 w-max rounded text-xs hover:bg-green-500">
                    update
                  </button>
                </div>
              </td>

              {/* ITEMS LIST */}
              <td className="p-1 border align-top">
                {order.items.map((item, idx) => (
                  <div key={idx} className="mb-2 md:flex gap-3">
                    <div className="">
                      <Link
                        href={`/product/${item.productId}`}
                        className=" font-bold hover:underline "
                      >
                        {item.name}
                      </Link>
                    </div>

                    <div className="">
                      × {item.quantity} =
                      {item.basePrice !== item.finalPrice && (
                        <span className="line-through text-gray-500 text-xs mx-2">
                          ${item.basePrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-green-600 font-semibold text-sm">
                        ${item.finalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
                <hr />
                <p className="font-bold text-lg text-green-600 mt-2 text-center">
                  ${order.totalAmount.toFixed(2)}
                </p>
                <p className="text-xs text-red-600">
                  shipping charge 100 is included
                </p>
              </td>

              {/* BUYER INFO */}
              <td className="p-1 border align-top text-xs leading-5">
                <p className="font-medium">{order.buyerInfo.name}</p>
                <p>{order.buyerInfo.email}</p>
                <p>{order.buyerInfo.phone}</p>
                <p>{order.buyerInfo.location}</p>
                <p className="mt-1 font-medium text-gray-700">
                  {order.paymentMethod}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
