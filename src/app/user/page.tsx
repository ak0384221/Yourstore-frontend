import HeroSection from "@/components/layout/herosection";
import CategoryTitle from "@/components/ui/categoryTitle";
import { TProductRes } from "@/features/product/types/product";
import Fetchfailed from "@/error/emptyData";
import EmptyData from "@/error/emptyData";
import SingleProduct from "@/features/product/components/common/SingleProductCard";
import { getLatestProducts } from "@/features/product/api/getLatestProducts";

export default async function Home() {
  const latestData: TProductRes = await getLatestProducts(5);
  const { data } = latestData;
  const { ok } = latestData;

  if (!ok) {
    return (
      <>
        <HeroSection />
        <Fetchfailed fetchcase="Latest Products" />;
      </>
    );
  }

  if (data.length === 0) {
    return (
      <>
        <HeroSection />
        <EmptyData fetchcase="Latest Data" />;
      </>
    );
  }

  return (
    <>
      <HeroSection />

      {data?.length > 0 && (
        <>
          <div className="newArrival my-5 ">
            <CategoryTitle title="New Arrival" />

            <div className="flex justify-center gap-2  my-5 w-full  mx-auto flex-wrap items-center">
              {data?.map((product, index: number) => (
                <SingleProduct item={product} key={index} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
