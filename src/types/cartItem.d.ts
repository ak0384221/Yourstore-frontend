import { TProduct } from "./product";

export type TCartItem = {
  _id: string;
  product: TProduct;
  productId: string;
  quantity: number;
  color: string;
  size: "XS" | "S" | "M" | "L" | "XL" | "2XL" | "3XL";
  addedToCart: string;
};

export type TCartResponse = {
  data: TCartItem[] | [];
  ok: boolean;
  error: null | string;
};
