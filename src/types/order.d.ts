import { ProductImage } from "./product";

export type TOrders = {
  _id: string;
  items: TOrderItem[];
  buyerInfo: TBuyerInfo;
  totalAmount: number;
  deliveryCharge: number;
  paymentMethod: "cash on delivery" | "online" | string;
  orderStatus:
    | "placed"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled"
    | string;
};

export type TOrderItem = {
  _id: string;
  productId: string;
  images: ProductImage[]; // assuming images is an array of strings (URLs)
  name: string;
  category: string;
  size: string;
  brand: string;
  color: string;
  basePrice: number;
  discountPercent: number;
  salePercent: number;
  finalPrice: number;
  quantity: number;
  totalPrice: number;
};

export type TBuyerInfo = {
  name: string;
  phone: string;
  email: string;
  location: string;
  _id: string;
};
export type TOrderSummary = {
  Pname: string;
  Pid: string;
  finalPrice: number;
  qty: number;
};

export type TOrderResponse = {
  data: TOrders[];
  error: null | string;
  ok: boolean;
};
