import { BASE_URL } from "@/utils/baseApi";
import { sendPostReq } from "./sendPostReq";
import { TPostOrders } from "@/types/order";
import { TPostCartItem } from "@/types/cartItem";

export async function sendOrders(
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
