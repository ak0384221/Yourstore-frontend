import ProductsPcsAdd from "@/atomic-components/addProductsQuanity";
import TextStyleInItem from "@/atomic-components/textStyleOfItem";
import { TProduct } from "@/types/product";
import {
  finalAmount,
  totalDiscount,
} from "@/utils/product/mutations/pricingFunctions";
import Image from "next/image";

export default function ProductDetails({ item }: { item: TProduct }) {
  return (
    <div
      className="max-w-[1200px] mx-auto mt-[20dvh] md:mt-[20dvh] p-4 md:p-8 flex
    flex-col md:flex-row gap-8 bg-[#131010] text-white "
    >
      {/* ---------- Product Images ---------- */}
      <div className="flex-1 flex flex-col md:flex-row gap-4">
        <div
          className="w-full md:w-2/3 h-[60vh] flex justify-center items-center
          rounded-lg shadow-sm overflow-hidden"
        >
          <Image
            alt={item?.name}
            src={item?.images[0].url}
            width={400}
            height={400}
            className="object-contain w-full h-full bg-gray-200"
          />
        </div>

        {/* Optional: Thumbnails */}
        {item?.images?.length > 1 && (
          <div className="hidden md:flex flex-col gap-2 w-1/6">
            {item.images.map((img, index: number) => (
              <div
                key={index}
                className="h-16 w-16 border rounded-lg cursor-pointer hover:border-blue-500 overflow-hidden"
              >
                <Image
                  src={img.url}
                  alt={img.alt || `Image ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ---------- Product Details ---------- */}
      <div className="flex-1 flex flex-col gap-4">
        <p className="text-sm ">Product ID: {item?.productId}</p>
        <p className="text-sm ">SKU: {item?._id}</p>

        <TextStyleInItem style="category" text={item?.category} />

        <h1 className="text-2xl md:text-3xl font-bold capitalize">
          {item?.name}
        </h1>
        <h1 className="text-xl md:text-2xl text-yellow-500 font-bold capitalize">
          {item?.brand || "unknown"}
        </h1>

        {/* Pricing */}
        <div className="flex items-center gap-3">
          <span className=" line-through text-lg">${item.basePrice}</span>

          <span className="text-2xl md:text-3xl font-bold text-green-600">
            $
            {finalAmount(
              item.basePrice,
              totalDiscount(item.discountPercent, item.salePercent)
            )}
          </span>
          {item.discountPercent > 0 && (
            <span className="text-sm text-red-500 font-semibold">
              ({totalDiscount(item.discountPercent, item.salePercent)}% off)
            </span>
          )}
        </div>

        {/* Description */}
        {item?.description && (
          <p className=" leading-relaxed">{item.description}</p>
        )}

        {/* Variants / Options */}
        {item.variants && item.variants.length > 0 && (
          <div className="flex flex-col gap-3">
            Available options
            {item.variants.map((variant, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <span className="font-medium capitalize">{variant.size}:</span>
                <div className="flex gap-2">
                  {variant.colors.map((color, idx: number) => (
                    <span
                      key={idx}
                      title={`${color.colorName} (${color.stock} in stock)`}
                    >
                      {color.colorName} {`${color.stock} in stock`}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quantity + Add to Cart */}
        <div className="mt-4">
          <ProductsPcsAdd item={item} />
        </div>

        {/* Shipping & Guarantee */}
        <div className="mt-6 p-4  rounded-lg border">
          <b className="text-lg md:text-xl">Free Shipping on Orders Over $50</b>
          <ul className="list-disc ml-5 mt-2 space-y-1  text-sm">
            <li>No-Risk Money Back Guarantee!</li>
            <li>No Hassle Refunds</li>
            <li>Secure Payments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
