import ProductDetails from "@/components/detailProduct";
import EmptyData from "@/error/emptyData";
import Fetchfailed from "@/error/fetchFailed";
import { getAllProducts } from "@/features/product/api/getAllProducts.api";
import { getProductById } from "@/features/product/api/getProductById.api";
import { TProductRes } from "@/types/product";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const product: TProductRes = await getProductById(id);
  const { data } = product;

  return {
    title: data[0]?.name,
    description: data[0]?.description,
  };
}
export async function generateStaticParams() {
  const productsRes: TProductRes = await getAllProducts();
  const { data: products } = productsRes; // fetch all product IDs from DB or API
  return products.map((product) => ({ id: product.productId })); // return array of { id: '1' } etc.
}

export default async function DetailProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const product: TProductRes = await getProductById(id);
  const { data } = product;
  const { ok } = product;

  if (!ok) {
    return <Fetchfailed fetchcase={`No product found`} />;
  }

  if (data.length === 0) {
    return <EmptyData fetchcase={`No product found`} />;
  }

  return (
    <>
      <ProductDetails item={data[0]} />
    </>
  );
}
