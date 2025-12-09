import { TGetProduct } from "../../product/types/product";

export type TPostCartItem = {
  product: string;
  productId: string;
  quantity: number;
  color: string;
  finalAmount: number;
  size: string | number;
};
export type TGetCartItem = {
  _id: string;
  product: TGetProduct;
  productId: string;
  quantity: number;
  color: string;
  finalAmount: number;
  size: string | number;
  addedToCart: string;
};

export type TGetCartResponse = {
  data: TGetCartItem[] | [];
  ok: boolean;
  error: null | string;
};
export type PostCartResponse = {
  data: TPostCartItem[] | [];
  ok: boolean;
  error: null | string;
};
