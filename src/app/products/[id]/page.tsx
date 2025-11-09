import ProductDetails from "@/components/detailProduct";
import { fetchById } from "@/utils/product/queries/fetchById";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;

  const product = await fetchById(id);

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function DetailProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const product = await fetchById(id);
  return (
    <>
      <ProductDetails item={product} />
    </>
  );
}
