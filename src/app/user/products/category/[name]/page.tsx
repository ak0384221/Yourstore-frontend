import EmptyData from "@/error/emptyData";
import Fetchfailed from "@/error/fetchFailed";
import { category } from "@/staticTexts/categories";
import { TProductRes } from "@/types/product";
import { fetchByCategory } from "@/utils/product/queries/fetchByCategory";
import { Metadata } from "next";
import ListShowing from "./listShowingPage";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  const { name } = await params;
  const isAvaiable = category.some(
    (category) => category.trim() === name.trim()
  );

  return {
    title: isAvaiable ? `Regalo | ${name}` : `category does not exist`,
    description: "Category page of Regalo ",
  };
}
export async function generateStaticParams() {
  return category.map((obj) => ({ name: obj }));
}
export default async function CategoryPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = await params;
  const isAvaiable = category.some(
    (category) => category.trim() === name.trim()
  );

  if (!isAvaiable) {
    return (
      <div className="text-neutral-700 text-center  py-10 font-extrabold">
        <p className="text-[15svw]">404 Error!</p>
        <p className="text-3xl"> This category does not exist.</p>
      </div>
    );
  }

  const products: TProductRes | [] = await fetchByCategory(name);
  const { data } = products;
  const { ok } = products;

  if (!ok) {
    return <Fetchfailed fetchcase={`${name}`} />;
  }

  if (data.length === 0) {
    return <EmptyData fetchcase={`${name} Products`} />;
  }

  return (
    // <>
    //   <h1 className="text-center text-black my-7 text-4xl capitalize font-bold ">
    //     {name}
    //   </h1>
    //   <div className=" px-5 mb-5  flex justify-between  py-2">
    //     <Breadcrumb categoryName={name} />
    //     <div className="w-1/2">
    //       <div className="flex flex-wrap items-center gap-3 bg-white  rounded-lg  shadow-sm">
    //         {/* Rating */}
    //         <select className="border rounded-lg px-1 py-2 text-sm">
    //           <option value="">Rating</option>
    //           <option value="4">4★ & above</option>
    //           <option value="3">3★ & above</option>
    //           <option value="2">2★ & above</option>
    //           <option value="1">1★ & above</option>
    //         </select>

    //         {/* Sort */}
    //         <select className="border rounded-lg px-1 py-2 text-sm">
    //           <option value="">Sort</option>
    //           <option value="low-high">Price: Low to High</option>
    //           <option value="high-low">Price: High to Low</option>
    //           <option value="rating">Rating</option>
    //           <option value="best-selling">Best Selling</option>
    //         </select>

    //         {/* Price Range */}
    //         <select className="border rounded-lg px-1 py-2 text-sm">
    //           <option value="">Price Range</option>
    //           <option value="0-500">$0 – $500</option>
    //           <option value="500-1000">$500 – $1000</option>
    //           <option value="1000-2000">$1000 – $2000</option>
    //         </select>
    //       </div>
    //     </div>
    //   </div>

    //   {data.length > 0 && (
    //     <div className="w-[97svw] mx-auto ">
    //       <Suspense fallback={"loading"}>
    //         <div className="flex justify-center gap-[1svh] flex-wrap">
    //           {data?.length > 0 ? (
    //             data?.map((product, id: number) => (
    //               <Item item={product} key={id} />
    //             ))
    //           ) : (
    //             <>
    //               <div> no products founds</div>
    //             </>
    //           )}
    //         </div>
    //       </Suspense>
    //     </div>
    //   )}
    //   {data.length === 0 && <EmptyData fetchcase={name} />}
    // </>
    <>
      <h1 className="text-center text-black my-7 text-4xl capitalize font-bold ">
        {name}
      </h1>
      <ListShowing data={data} name={name} />
    </>
  );
}
