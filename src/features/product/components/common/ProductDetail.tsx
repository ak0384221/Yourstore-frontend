import { TGetProduct } from "@/features/product/types/product";
import ProductImageSection from "../composite/ProductImagesSection";
import ProductInfo from "../composite/ProductInfo";

export default function ProductDetail({
  item,
  totalDisc,
}: {
  item: TGetProduct;
  totalDisc: number;
}) {
  return (
    <>
      <div className="w-full mt-2 max-w-6xl mx-auto p-4 md:p-8 bg-white px-10  text-black  justify-center flex md:flex-row flex-col gap-10  ">
        {/* LEFT: IMAGES */}
        <div className="w-full md:w-1/2 ">
          <ProductImageSection item={item} totalDisc={totalDisc} />
        </div>
        {/* RIGHT PANEL */}
        <ProductInfo item={item} totalDisc={totalDisc} />
      </div>
    </>
  );
}
