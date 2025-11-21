import RemoveCartItem from "@/atomic-components/removeFromCartButton";
import { TGetCartItem } from "@/types/cartItem";
import {
  finalAmount,
  totalDiscount,
} from "@/utils/product/mutations/pricingFunctions";
import Image from "next/image";

export default function ProductInCarts({ item }: { item: TGetCartItem }) {
  return (
    <div
      key={item._id}
      className="flex flex-col relative md:flex-row items-center justify-between  rounded-xl p-4 shadow-md border border-gray-300 hover:bg-[#e4fbfd] transition-colors"
    >
      <RemoveCartItem id={item._id} />
      <div className="flex items-center gap-5 w-full md:w-auto ">
        <div className="relative w-28 h-28 rounded-md overflow-hidden">
          <Image
            src={item.product.images[0].url || "/placeholder.png"}
            alt={item.product.name}
            fill
            className="object-cover bg-[#e3f1f5]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">{item.product.name}</h2>
          <p className="text-sm text-gray-700">
            ProductID: {item.product.productId}
          </p>

          <p className="text-sm">
            Size:{" "}
            <span className="text-black font-medium">{item.size || "—"}</span>
          </p>
          <p className="text-sm">
            Color: <span className="inline-block  ml-1">{item.color}</span>
          </p>
          <p className="text-sm">Qty: {item.quantity}</p>
          <p className="text-sm text-red-700 font-bold">
            In Stock: {item.product.availableQuantity}
          </p>
        </div>
      </div>

      <div className="mt-3 md:mt-0 text-right  ">
        <p className="text-sm text-black line-through">
          $ {item.product.basePrice}
        </p>
        <p>
          $
          {finalAmount(
            item.product.basePrice,
            totalDiscount(
              item.product.discountPercent,
              item.product.salePercent
            )
          ).toFixed(2)}
          <span className="text-green-700 font-black text-sm">x</span>{" "}
          <span>{item.quantity}</span>
        </p>

        <p className="font-bold text- text-green-500  ">${item.finalAmount}</p>

        <p className="text-xs text-red-700">
          {totalDiscount(
            item.product.discountPercent,
            item.product.salePercent
          )}
          % off
        </p>
      </div>
    </div>
  );
}
