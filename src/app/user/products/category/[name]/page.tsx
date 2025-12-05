import EmptyData from "@/error/emptyData";
import Fetchfailed from "@/error/fetchFailed";
import { category } from "@/staticTexts/categories";
import { TProductRes } from "@/types/product";
import { Metadata } from "next";
import ListShowing from "./listShowingPage";
import { getProductsByCategory } from "@/features/product/api/getProductsByCategory.api";

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

  const products: TProductRes | [] = await getProductsByCategory(name);
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
      <h1 className="text-center text-black my-7 text-4xl capitalize font-bold ">
        {name}
      </h1>
      <ListShowing data={data} name={name} />
    </>
  );
}
