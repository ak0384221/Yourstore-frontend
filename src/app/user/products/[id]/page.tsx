import ProductDetails from "@/components/detailProduct";
import { TProductRes } from "@/types/product";
import { fetchAllProduct } from "@/utils/product/queries/fetchAllProducts";
import { fetchById } from "@/utils/product/queries/fetchById";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;

  const product = await fetchById(id);
  const { data } = product;

  return {
    title: data.name,
    description: data.description,
  };
}
export async function generateStaticParams({
  params,
}: {
  params: { id: string };
}) {
  const productsRes: TProductRes = await fetchAllProduct();
  const { data: products } = productsRes; // fetch all product IDs from DB or API
  return products.map((product) => ({ id: product.productId })); // return array of { id: '1' } etc.
}

export default async function DetailProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const product = await fetchById(id);
  const { data } = product;
  return (
    <>
      <ProductDetails item={data[0]} />
    </>
  );
}
