import { BASE_URL } from "@/utils/baseApi";
import { sendPostReq } from "./sendPostReq";

export async function sendOrders(orderObj: any) {
  const response = await sendPostReq(`${BASE_URL}/api/order`, orderObj);
  return response;
}
