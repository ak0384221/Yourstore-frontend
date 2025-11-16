import EmptyData from "@/error/emptyData";
import Fetchfailed from "@/error/fetchFailed";
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
  const { name } = await params;
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
  const { name } = await params;
  const isAvaiable = allCategories.some(
    (category) => category.name.trim() === name.trim()
  );

  if (!isAvaiable) {
    return (
      <div className="text-neutral-700 text-center  py-10 font-extrabold">
        <p className="text-[15dvw]">404 Error!</p>
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
    <>
      <h1 className="text-center text-white text-4xl capitalize font-bold mb-8 pt-15">
        {name}
      </h1>
      {data.length > 0 && (
        <div className="w-[97dvw] mx-auto ">
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
      {data.length === 0 && <EmptyData fetchcase={name} />}
    </>
  );
}
