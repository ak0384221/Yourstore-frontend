import { TPostCartItem } from "@/features/cart/types/cartItem";
import { BASE_URL } from "@/features/API/baseApi";
import type { Dispatch, SetStateAction, RefObject } from "react";
import { sendPostReq } from "@/features/API/sendPostReq";

export async function addToCart(cartObj: TPostCartItem) {
  try {
    const res = await sendPostReq(`${BASE_URL}/api/cart`, cartObj);
    return res;
  } catch (err) {
    return {
      ok: false,
      error: err,
      data: [],
    };
  }
}
