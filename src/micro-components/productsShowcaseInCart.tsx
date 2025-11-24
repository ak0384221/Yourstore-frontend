import RemoveCartItem from "@/atomic-components/removeFromCartButton";
import { TGetCartItem } from "@/types/cartItem";
import { totalDiscount } from "@/utils/product/mutations/pricingFunctions";
import Image from "next/image";

export default function ProductInCarts({ item }: { item: TGetCartItem }) {
  return (
    <div className="relative grid grid-cols-[80px_1fr_auto] gap-4 items-center p-4 border border-neutral-300 rounded-xl shadow-sm hover:shadow-md transition-all bg-white hover:bg-[#f3fcfd]">
      <RemoveCartItem id={item._id} />

      {/* Image */}
      <div className="w-20 h-20 rounded-md overflow-hidden">
        <Image
          src={item.product.images[0].url || "/placeholder.png"}
          alt={item.product.name}
          width={80}
          height={80}
          className="object-cover bg-[#e3f1f5]"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center text-sm">
        <h2 className="font-semibold text-base leading-tight line-clamp-1">
          {item.product.name}
        </h2>
        <div className="flex flex-wrap gap-x-3 text-gray-600">
          <span>
            Size: <span className="text-black">{item.size || "—"}</span>
          </span>
          <span>Color: {item.color}</span>
          <span>Qty: {item.quantity}</span>
        </div>
        <p className="text-[12px] text-red-600 font-medium">
          Stock: {item.product.availableQuantity}
        </p>
      </div>

      {/* Pricing */}
      <div className="text-right">
        <p className="text-xs line-through text-red-500">
          ${item.product.basePrice?.toFixed(2)}
        </p>

        <p className="font-semibold text-black">
          ${item.finalAmount?.toFixed(2)}
        </p>

        <p className="text-[11px] text-green-600 font-bold">
          Save{" "}
          {totalDiscount(
            item.product.discountPercent,
            item.product.salePercent
          )?.toFixed(2)}
          %
        </p>
      </div>
    </div>
  );
}
