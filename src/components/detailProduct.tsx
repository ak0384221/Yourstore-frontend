// import ProductsPcsAdd from "@/atomic-components/addProductsQuanity";
// import TextStyleInItem from "@/atomic-components/textStyleOfItem";
// import { TGetProduct } from "@/types/product";
// import {
//   finalAmount,
//   totalDiscount,
// } from "@/utils/product/mutations/pricingFunctions";
// import Image from "next/image";

import ProductsPcsAdd from "@/atomic-components/addProductsQuanity";
import Breadcrumb from "@/atomic-components/BreadCrumbs";
import { TGetProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

// export default function ProductDetails({ item }: { item: TGetProduct }) {
//   return (
//     <div
//       className="mx-auto p-4 md:p-8 flex
//     flex-col md:flex-row gap-8 bg-white text-black "
//     >
//       {/* ---------- Product Images ---------- */}
//       <div className="flex-1 flex flex-col md:flex-row gap-4">
//         <div
//           className="w-full md:w-2/3 h-[60svh] flex justify-center items-center
//           rounded-lg shadow-sm overflow-hidden relative"
//         >
//           <Image
//             alt={item?.name}
//             src={item?.images[0].url}
//             width={400}
//             height={400}
//             className="object-contain w-full h-full bg-gray-200"
//           />
//           <p className="text-sm absolute left-0 top-0 m-2 bg-white/70 p-1 ">
//             Product ID: {item?.productId}
//           </p>
//         </div>

//         {/* Optional: Thumbnails */}
//         {item?.images?.length > 1 && (
//           <div className="hidden md:flex flex-col gap-2 w-1/6">
//             {item.images.map((img, index: number) => (
//               <div
//                 key={index}
//                 className="h-16 w-16 border rounded-lg cursor-pointer hover:border-blue-500 overflow-hidden"
//               >
//                 <Image
//                   src={img.url}
//                   alt={img.alt || `Image ${index + 1}`}
//                   width={64}
//                   height={64}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* ---------- Product Details ---------- */}
//       <div className="flex-1 flex flex-col gap-2">
//         <p className="text-sm ">SKU: {item?._id}</p>

//         <TextStyleInItem style="category" text={item?.category} />

//         <h1 className="text-2xl md:text-3xl font-bold capitalize">
//           {item?.name}
//         </h1>

//         <div>
//           <span className="font-bold text-neutral-800">Brand : </span>
//           <span className="text-xl md:text-2xl text-yellow-500 font-bold capitalize">
//             {item?.brand || "unknown"}
//           </span>
//         </div>
//         {/* Pricing */}
//         <div className="flex items-center gap-3">
//           <span className=" line-through text-lg">${item.basePrice}</span>

//           <span className="text-2xl md:text-3xl font-bold text-green-600">
//             $
//             {finalAmount(
//               item.basePrice,
//               totalDiscount(item.discountPercent, item.salePercent)
//             ).toFixed(2)}
//           </span>
//           {item.discountPercent > 0 && (
//             <span className="text-sm text-red-500 font-semibold">
//               ({totalDiscount(item.discountPercent, item.salePercent)}% off)
//             </span>
//           )}
//         </div>

//         {/* Description */}
//         {item?.description && (
//           <p className=" leading-relaxed">{item.description}</p>
//         )}

//         {/* Variants / Options */}
//         {item.variants && item.variants.length > 0 && (
//           <div className="flex flex-col gap-3">
//             <h1 className="font-bold text-xl"> Available Varients</h1>
//             {item.variants.map((variant, index: number) => (
//               <div key={index} className="flex items-center gap-3">
//                 <span className="font-medium capitalize">{variant.size}:</span>
//                 <div className="flex gap-2">
//                   {variant.colors.map((color, idx: number) => (
//                     <div
//                       key={idx}
//                       title={`${color.colorName} (${color.stock} in stock)`}
//                     >
//                       {color.colorName}{" "}
//                       <span className="text-green-600 text-sm font-bold">
//                         ({`${color.stock} in stock`})
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Quantity + Add to Cart */}
//         <div>
//           <ProductsPcsAdd item={item} />
//         </div>

//         {/* Shipping & Guarantee */}
//         {/* <div className="mt-6 p-4  rounded-lg border border-[#b9b9b9]">
//           <b className="text-lg md:text-xl">Free Shipping on Orders Over $50</b>
//           <ul className="list-disc ml-5 mt-2 space-y-1  text-sm">
//             <li>No-Risk Money Back Guarantee!</li>
//             <li>No Hassle Refunds</li>
//             <li>Secure Payments</li>
//           </ul>
//         </div> */}
//       </div>
//     </div>
//   );
// }

export default function ProductDetails({ item }: { item: TGetProduct }) {
  const totalDisc = item.discountPercent + item.salePercent;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white text-black grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT: IMAGES */}
      <div className="flex flex-col gap-4">
        <Breadcrumb item={item} />

        <div className="relative w-full h-[55svh] bg-gray-100 rounded-xl overflow-hidden">
          <Image
            src={item.images[0].url}
            alt={item.name}
            width={600}
            height={600}
            className="object-contain w-full h-full"
          />

          {/* STATUS */}
          <span
            className={`absolute top-3 left-3 px-3 py-1 text-xs rounded-md text-white capitalize
            ${item.status === "active" && "bg-green-600"}
            ${item.status === "on hold" && "bg-yellow-500"}
            ${item.status === "archived" && "bg-gray-500"}`}
          >
            {item.status}
          </span>

          {/* DISCOUNT */}
          {totalDisc > 0 && (
            <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-md">
              -{totalDisc}%
            </span>
          )}
        </div>

        {/* THUMBNAILS */}
        <div className="flex gap-2 overflow-x-auto">
          {item.images.map((img, i) => (
            <div
              key={i}
              className="min-w-20 h-20 rounded-md border hover:border-blue-500 overflow-hidden cursor-pointer"
            >
              <Image
                src={img.url}
                alt={img.alt || `img-${i}`}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-col gap-4">
        {/* TITLE & BRAND */}
        <div>
          <p className="text-sm text-neutral-500">
            {item.brand} • {item.category}
          </p>
          <h1 className="text-2xl font-bold capitalize leading-tight">
            {item.name}
          </h1>
        </div>

        {/* RATING */}
        <div className="flex items-center gap-2 text-yellow-500 text-sm">
          ⭐ {item.rating.average.toFixed(1)}
          <span className="text-neutral-500">({item.rating.count})</span>
          <span className="text-neutral-500">| Sold: {item.sold}</span>
        </div>

        {/* PRICING */}
        <div className="flex items-end gap-3">
          <span className="text-3xl font-bold text-green-600">
            ${item.finalPrice.toFixed(2)}
          </span>

          {totalDisc > 0 && (
            <>
              <span className="line-through text-neutral-400 text-sm">
                ${item.basePrice}
              </span>
              <span className="text-red-500 text-sm font-semibold">
                ({totalDisc}% OFF)
              </span>
            </>
          )}
        </div>

        {/* STOCK */}
        <span
          className={`text-sm font-semibold
            ${item.availableQuantity > 10 && "text-green-600"}
            ${
              item.availableQuantity <= 10 &&
              item.availableQuantity > 0 &&
              "text-yellow-600"
            }
            ${item.availableQuantity === 0 && "text-red-600"}`}
        >
          {item.availableQuantity > 0
            ? `${item.availableQuantity} in stock`
            : "Out of stock"}
        </span>

        {/* DESCRIPTION */}
        {item.description && (
          <p className="text-sm text-neutral-700 leading-relaxed line-clamp-4">
            {item.description}
          </p>
        )}

        {/* VARIANTS */}
        {item.variants?.length > 0 && (
          <div className="mt-2">
            <h2 className="font-bold text-lg">Variants</h2>
            <div className="flex flex-wrap gap-2 mt-1 text-sm">
              {item.variants.map((v, i) =>
                v.colors.map((c, j) => (
                  <div
                    key={`${i}-${j}`}
                    className="px-2 py-1 border rounded-md bg-gray-50"
                    title={`${c.colorName} (${c.stock} in stock)`}
                  >
                    {v.size} • {c.colorName}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* ACTION */}
        <div className="mt-3">
          <ProductsPcsAdd item={item} />
        </div>

        {/* META */}
        <div className="text-xs text-neutral-500 border-t pt-2">
          <p>SKU: {item._id}</p>
          <p>Added: {new Date(item.addedDate).toLocaleDateString()}</p>
          <p>Updated: {new Date(item.updatedDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
