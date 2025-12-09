import { ProductImage } from "./product";

export type TPostOrders = {
  items: TPostOrderItem[];
  buyerInfo: TBuyerInfo;
  totalAmount: number;
  deliveryCharge: number;
  paymentMethod: "cash on delivery" | "online" | string;
};

export type TPostOrderItem = {
  _id: string;
  productId: string;
  images: ProductImage[]; // assuming images is an array of strings (URLs)
  name: string;
  category: string;
  size: string | number;
  brand: string;
  color: string;
  basePrice: number;
  discountPercent: number;
  salePercent: number;
  finalPrice: number;
  quantity: number;
  totalPrice: number;
};

export type TGetOrders = {
  _id: string;
  items: TPostOrderItem[];
  buyerInfo: TBuyerInfo;
  totalAmount: number;
  deliveryCharge: number;
  paymentMethod: "cash on delivery" | "online" | string;
  orderStatus: "placed" | "confirmed" | "shipped" | "delivered";
  orderDate: string;
};

export type TBuyerInfo = {
  name: string;
  phone: string;
  email: string;
  location: string;
};
export type TOrderSummary = {
  Pname: string;
  Pid: string;
  finalPrice: number;
  qty: number;
};

export type TGetOrderResponse = {
  data: TGetOrders[];
  error: null | string;
  ok: boolean;
};
