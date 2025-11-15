import HeroSection from "@/components/herosection";
import CategoryTitle from "@/atomic-components/categoryTitle";
import Item from "@/micro-components/item";
import Link from "next/link";
import { fetchlatestArrival } from "@/utils/product/queries/fetchLatestArrival";
import { TProductRes } from "@/types/product";

export default async function Home() {
  const latestData: TProductRes = await fetchlatestArrival(5);
  const { data } = latestData;

  return (
    <>
      <HeroSection />

      {data?.length > 0 && (
        <>
          <div className="newArrival my-5 ">
            <CategoryTitle title="New Arrival" />
            <Link
              className="text-right  capitalize block mr-5  text-categoryHeader"
              href="/user/products/latest"
            >
              see all
            </Link>
            <div className="flex justify-center gap-4  my-5 w-full  mx-auto flex-wrap items-center">
              {data?.map((product, index: number) => (
                <Item item={product} key={index} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* {latestData?.length == 0 && <Fetchfailed fetchcase={"latestData"} />} */}
    </>
  );
}
