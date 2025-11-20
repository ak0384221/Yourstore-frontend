import { BASE_URL } from "@/utils/baseApi";
import { sendPostReq } from "./sendPostReq";
import { TOrders } from "@/types/order";

export async function sendOrders(
  orderObj: TOrders,
  setState?: React.Dispatch<React.SetStateAction<string>>
) {
  const response = await sendPostReq(
    `${BASE_URL}/api/order`,
    orderObj,
    setState
  );
  console.log("order response -----------------", response);
  return response;
}
