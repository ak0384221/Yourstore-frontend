import EmptyData from "@/error/emptyData";
import Fetchfailed from "@/error/fetchFailed";
import { TProductRes } from "@/features/product/types/product";
import ListShowing from "./category/[name]/listShowingPage";
import { getProductsBySearch } from "@/features/product/api/getProductsBySearch";

export default async function ProductsSearch({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = (await searchParams).query || ""; // "shoes"
  const productsRes: TProductRes = await getProductsBySearch(query);
  const { data } = productsRes;
  const { ok } = productsRes;

  if (!ok) {
    return <Fetchfailed fetchcase={`No product found`} />;
  }

  if (data.length === 0) {
    return <EmptyData fetchcase={`No product found`} />;
  }

  return (
    <>
      <h1 className=" text-black my-7 px-4 text-lg capitalize font-bold ">
        {`Search result for ${query}`}
      </h1>
      <ListShowing data={data} name={"search result"} />
    </>
  );
}
