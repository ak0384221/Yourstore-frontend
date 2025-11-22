import HeroSection from "@/components/herosection";
import CategoryTitle from "@/atomic-components/categoryTitle";
import Item from "@/micro-components/item";
import Link from "next/link";
import { fetchlatestArrival } from "@/utils/product/queries/fetchLatestArrival";
import { TProductRes } from "@/types/product";
import Fetchfailed from "@/error/emptyData";
import EmptyData from "@/error/emptyData";

export default async function Home() {
  const latestData: TProductRes = await fetchlatestArrival(5);
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

            <div className="flex justify-center gap-4  my-5 w-full  mx-auto flex-wrap items-center">
              {data?.map((product, index: number) => (
                <Item item={product} key={index} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
