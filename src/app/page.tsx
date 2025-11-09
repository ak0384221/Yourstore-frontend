import HeroSection from "@/components/herosection";
import CategoryTitle from "@/atomic-components/categoryTitle";
import Item from "@/micro-components/item";
import Ads from "@/micro-components/ads";
import Link from "next/link";
import { fetchlatestArrival } from "@/utils/product/queries/fetchLatestArrival";
import { fetchOnSale } from "@/utils/product/queries/fetchOnSale";
import ShopByCategory from "@/components/shopByCategory";
import ShopByOccasionCard from "@/micro-components/shopByOccasion";

type Tproduct = {
  _id: number;
  name: string;
  category: string;
  price: number;
  discount: number;
  description: string;
  images: string[];
  stock: number;
  arrivalDate: string;
  sale: number;
};
export default async function Home() {
  const latestData = await fetchlatestArrival();
  const saleData = await fetchOnSale();

  return (
    <>
      <HeroSection />

      <div className="newArrival my-5 border">
        {latestData?.length > 0 && (
          <>
            <CategoryTitle title="New Arrival" />
            <Link
              className="text-right  capitalize block mr-5"
              href="/products/latest"
            >
              see all
            </Link>
            <div className="flex justify-center gap-4  my-5 w-5/6 mx-auto flex-wrap items-center">
              {latestData?.map((product: Tproduct, index: number) => (
                <Item item={product} key={index} />
              ))}
            </div>
          </>
        )}
      </div>
      <Ads />
      {saleData.length > 0 && (
        <div className="sale my-5">
          <CategoryTitle title="on Sale" />
          <Link
            className="text-right  capitalize block mr-5"
            href="/products/sale"
          >
            see all
          </Link>
          <div className="flex justify-center gap-4 my-5 w-5/6 mx-auto flex-wrap">
            {saleData?.map((product: Tproduct, index: number) => (
              <Item item={product} key={index} />
            ))}
          </div>
        </div>
      )}

      {/* <ShopByCategory />
      <div className="shopByOc">
        <CategoryTitle title="shop by occasion " />

        <div className=" flex justify-center flex-wrap gap-4 my-5">
          {navOne.map((category) => {
            return <ShopByOccasionCard />;
          })}
        </div>
      </div> */}
    </>
  );
}
