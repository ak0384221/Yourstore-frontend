import ProductsPcsAdd from "@/atomic-components/addProductsQuanity";
import { TGetProduct, TProductRes } from "@/types/product";
import LeftDetail from "./leftDetail";
import { fetchByCategory } from "@/utils/product/queries/fetchByCategory";
import Item from "@/micro-components/item";

export default async function ProductDetails({ item }: { item: TGetProduct }) {
  const totalDisc = item.discountPercent + item.salePercent;
  const products: TProductRes | [] = await fetchByCategory(
    item?.category.trim().toLocaleLowerCase()
  );
  const { data } = products;
  const { ok } = products;
  const suggested = ok && data.length > 0;
  let suggestedData;
  if (data.length > 10) {
    suggestedData = data.splice(0, 9);
  } else {
    suggestedData = data;
  }

  return (
    <>
      <div className="w-full mt-2 max-w-6xl mx-auto p-4 md:p-8 bg-white px-10  text-black  justify-center flex md:flex-row flex-col gap-10  ">
        {/* LEFT: IMAGES */}
        <div className="w-full md:w-1/2 ">
          {" "}
          <LeftDetail item={item} totalDisc={totalDisc} />
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 ">
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

      <h1 className="text-center text-black my-7 text-4xl capitalize font-bold ">
        Related Items from {item.category}
      </h1>
      {/* <ListShowing data={data} name={item.category} /> */}
      {suggested && (
        <div className=" flex justify-center gap-2 flex-wrap my-10">
          {suggestedData?.slice(0)?.map((item, index) => {
            return <Item item={item} key={index} />;
          })}
        </div>
      )}
    </>
  );
}
