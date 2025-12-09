import { TGetProduct, TProductRes } from "@/features/product/types/product";
import SingleProduct from "@/features/product/components/common/SingleProductCard";
import ProductDetail from "./ProductDetail";
import { getProductsByCategory } from "../../api/getProductsByCategory.api";

export default async function ProductDetailPage({
  item,
}: {
  item: TGetProduct;
}) {
  const totalDisc = item.discountPercent + item.salePercent;
  const products: TProductRes | [] = await getProductsByCategory(
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
      <ProductDetail item={item} totalDisc={totalDisc} />

      <h1 className="text-center text-black my-7 text-4xl capitalize font-bold ">
        Related Items from {item.category}
      </h1>
      {suggested && (
        <div className=" flex justify-center gap-2 flex-wrap my-10">
          {suggestedData?.slice(0)?.map((item, index) => {
            return <SingleProduct item={item} key={index} />;
          })}
        </div>
      )}
    </>
  );
}
