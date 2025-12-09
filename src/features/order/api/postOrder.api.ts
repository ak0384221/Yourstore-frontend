import { BASE_URL } from "@/features/API/baseApi";
import { TPostCartItem } from "@/features/cart/types/cartItem";
import { sendPostReq } from "@/features/API/sendPostReq";
import { TPostOrders } from "../types/order";

export async function postOrder(
  orderObj: TPostOrders | TPostCartItem,
  setState?: React.Dispatch<React.SetStateAction<string>>
) {
  const response = await sendPostReq(
    `${BASE_URL}/api/order`,
    orderObj,
    setState
  );
  return response;
}
