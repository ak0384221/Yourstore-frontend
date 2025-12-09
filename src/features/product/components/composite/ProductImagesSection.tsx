"use client";
import Breadcrumb from "@/components/ui/BreadCrumbs";
import { TGetProduct } from "@/features/product/types/product";
import Image from "next/image";
import { useState } from "react";
export default function ProductImageSection({
  item,
  totalDisc,
}: {
  item: TGetProduct;
  totalDisc: number;
}) {
  const [imageUrl, setImageUrl] = useState(item.images[0].url);
  return (
    <div className="flex flex-col gap-5  ">
      <Breadcrumb item={item} />
      <div className="relative w-full md:w-4/5 lg:w-3/5 mx-auto aspect-square  bg-gray-100 rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={item.name}
          fill
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
      <div
        style={{ scrollbarWidth: "none" }}
        className="flex gap-2 overflow-x-auto border border-neutral-300 p-2  "
      >
        {item.images.map((img, i) => (
          <div
            key={i}
            className={`min-w-20 h-20 rounded-md border hover:bg-neutral-200 overflow-hidden cursor-pointer ${
              img.url === imageUrl ? "bg-blue-300" : "border-black"
            }`}
          >
            <Image
              onClick={() => setImageUrl(() => img.url)}
              onMouseEnter={() => {
                // Preload image
                const preload = new window.Image();
                preload.src = img.url;
              }}
              src={img.url}
              alt={img.alt || `img-${i}`}
              width={80}
              height={80}
              className="object-cover  w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
