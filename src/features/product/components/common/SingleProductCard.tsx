import { TGetProduct } from "@/features/product/types/product";
import Image from "next/image";
import Link from "next/link";
export default function SingleProduct({ item }: { item: TGetProduct }) {
  return (
    <Link
      href={`/user/products/${item.productId}`}
      className="group w-[45svw] md:w-[40svw] lg:w-1/4 xl:w-1/5
  bg-white border border-gray-300 rounded-lg overflow-hidden 
  shadow-sm hover:shadow-md transition-all relative "
    >
      {/* Image with overlays */}
      <div className="  bg-gray-50">
        <div className="img relative  w-full  aspect-square overflow-hidden  bg-[#ffffff] ">
          <Image
            src={item.images[0].url}
            alt={item.name}
            fill
            loading="lazy"
            className="object-cover  hover:scale-105 transition-all"
          />
        </div>

        {/* Discount Badge */}
        {(item.discountPercent > 0 || item.salePercent > 0) && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-md">
            -{item.discountPercent + item.salePercent}%
          </span>
        )}

        {/* Status Dot */}
        <span
          className={`absolute top-2 left-2 p-1 text-xs text-white rounded-sm
        ${
          item.status === "active"
            ? "bg-green-600"
            : item.status === "on hold"
            ? "bg-yellow-500"
            : "bg-gray-500"
        }`}
        >
          {item.status}
        </span>
      </div>

      {/* Bottom Info */}
      <div className="p-2 flex flex-col gap-1  ">
        {/* Name */}
        <h3 className="text-[13px] font-semibold line-clamp-1">{item.name}</h3>

        {/* Row: Price + Rating */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-green-700">
              ${item.finalPrice.toFixed(2)}
            </span>
            <span className="text-[12px] line-through text-gray-7000">
              ${item.basePrice.toFixed(2)}
            </span>
          </div>

          {/* compact stars */}
          <div className="text-[12px] text-yellow-500">
            {"★".repeat(Math.round(item.rating?.average || 0))}
          </div>
        </div>

        {/* Row: Category + Stock */}
        <div className="flex justify-between items-center text-[10px]">
          <span className="uppercase text-gray-500">{item.category}</span>

          <span
            className={
              item.availableQuantity > 0 ? "text-green-600" : "text-red-600"
            }
          >
            {item.availableQuantity > 0 ? "In stock" : "Out"}
          </span>
        </div>
      </div>
    </Link>
  );
}
