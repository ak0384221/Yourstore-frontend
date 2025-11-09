import Item from "@/micro-components/item";
import { categories } from "@/staticTexts/categories";
import { fetchByCategory } from "@/utils/product/queries/fetchByCategory";
import { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  const { name } = params;
  const isAvaiable = categories.some(
    (category) => category.name.trim() === name.trim()
  );

  return {
    title: isAvaiable ? `Regalo | ${name}` : `category does not exist`,
    description: "Category page of Regalo ",
  };
}

export default async function ({ params }: { params: { name: string } }) {
  const { name } = params;
  const isAvaiable = categories.some(
    (category) => category.name.trim() === name.trim()
  );

  const products = await fetchByCategory(name);
  return (
    <>
      <div className="w-5/6 mx-auto">
        <h1 className="text-center text-2xl font-bold my-5">{name}</h1>
        <Suspense fallback={"loading"}>
          <div className="flex justify-center gap-2 flex-wrap">
            {products?.length > 0 ? (
              products?.map((product: any, id: number) => (
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
    </>
  );
}
