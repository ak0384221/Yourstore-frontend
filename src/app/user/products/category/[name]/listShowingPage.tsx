"use client";
import Breadcrumb from "@/components/ui/BreadCrumbs";
import EmptyData from "@/error/emptyData";
import SingleProduct from "@/features/product/components/common/SingleProductCard";
import { TGetProduct } from "@/types/product";
import { Suspense, useMemo, useState } from "react";

export default function ListShowing({
  data,
  name,
}: {
  data: TGetProduct[];
  name: string;
}) {
  const [rating, setRating] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("");

  // ⭐ Always filter from ORIGINAL DATA (not filtered data)
  const filteredProducts = useMemo(() => {
    let result = [...data];

    // ----------------- FILTER BY RATING -----------------
    if (rating) {
      result = result.filter((p) => p.rating.average >= Number(rating));
    }

    // ----------------- FILTER BY PRICE RANGE -----------------
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      result = result.filter((p) => p.finalPrice >= min && p.finalPrice <= max);
    }

    // ----------------- SORTING -----------------
    if (sortBy) {
      if (sortBy === "low-high") {
        result.sort((a, b) => a.finalPrice - b.finalPrice);
      } else if (sortBy === "high-low") {
        result.sort((a, b) => b.finalPrice - a.finalPrice);
      } else if (sortBy === "rating") {
        result.sort((a, b) => b.rating.average - a.rating.average);
      } else if (sortBy === "best-selling") {
        result.sort((a, b) => b.sold - a.sold); // assuming you have "sold"
      }
    }

    return result;
  }, [data, rating, priceRange, sortBy]);

  return (
    <>
      <div className="px-5 mb-5 flex justify-between items-start py-2">
        <Breadcrumb categoryName={name} />

        <div className="w-1/2">
          <div className="flex flex-wrap items-center gap-3 bg-white rounded-lg shadow-sm px-3 py-2">
            {/* RATING FILTER */}
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border rounded-lg px-2 py-1 text-sm"
            >
              <option value="">Rating</option>
              <option value="4">4★ & above</option>
              <option value="3">3★ & above</option>
              <option value="2">2★ & above</option>
              <option value="1">1★ & above</option>
            </select>

            {/* SORT */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-2 py-1 text-sm"
            >
              <option value="">Sort</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="best-selling">Best Selling</option>
            </select>

            {/* PRICE RANGE */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="border rounded-lg px-2 py-1 text-sm"
            >
              <option value="">Price Range</option>
              <option value="0-500">$0 – $500</option>
              <option value="500-1000">$500 – $1000</option>
              <option value="1000-2000">$1000 – $2000</option>
            </select>

            {/* RESET BUTTON */}
            <button
              onClick={() => {
                setRating("");
                setPriceRange("");
                setSortBy("");
              }}
              className="text-xs bg-gray-200 px-3 py-2 rounded hover:bg-gray-300"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCTS LIST */}
      {filteredProducts.length > 0 ? (
        <div className="w-[97svw] mx-auto">
          <Suspense fallback={"loading"}>
            <div className="flex justify-center gap-[1svh] flex-wrap">
              {filteredProducts.map((product, id) => (
                <SingleProduct item={product} key={id} />
              ))}
            </div>
          </Suspense>
        </div>
      ) : (
        <EmptyData fetchcase={name} />
      )}
    </>
  );
}
