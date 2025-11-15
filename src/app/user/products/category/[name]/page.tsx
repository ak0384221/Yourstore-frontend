import Fetchfailed from "@/error/fetchFailed";
import EmptyCart from "@/error/noCartFound";
import Item from "@/micro-components/item";
import { allCategories } from "@/staticTexts/categories";
import { TProductRes } from "@/types/product";
import { fetchByCategory } from "@/utils/product/queries/fetchByCategory";
import { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  const { name } = params;
  const isAvaiable = allCategories.some(
    (category) => category.name.trim() === name.trim()
  );

  return {
    title: isAvaiable ? `Regalo | ${name}` : `category does not exist`,
    description: "Category page of Regalo ",
  };
}
export async function generateStaticParams() {
  return allCategories.map((obj) => ({ name: obj.name }));
}
export default async function ({ params }: { params: { name: string } }) {
  const { name } = params;
  const isAvaiable = allCategories.some(
    (category) => category.name.trim() === name.trim()
  );

  const products: TProductRes = await fetchByCategory(name);
  const { data } = products;

  return (
    <>
      {data.length > 0 && (
        <div className="w-[97dvw] mx-auto pt-8">
          <h1 className="text-center text-pink-500 text-3xl capitalize font-bold mb-8">
            {name}
          </h1>
          <Suspense fallback={"loading"}>
            <div className="flex justify-center gap-[7dvh] flex-wrap">
              {data?.length > 0 ? (
                data?.map((product, id: number) => (
                  <Item item={product} key={id} />
                ))
              ) : (
                <>
                  <div> no products founds</div>
                </>
              )}
            </div>
          </Suspense>
        </div>
      )}

      {/* {products.length == 0 && <Fetchfailed fetchcase={name} />} */}
    </>
  );
}
