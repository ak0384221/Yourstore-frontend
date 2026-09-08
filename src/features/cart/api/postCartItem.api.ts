import { TPostCartItem } from "@/features/cart/types/cartItem";
import { PUBLIC_URL } from "@/features/API/baseApi";
import type { Dispatch, SetStateAction, RefObject } from "react";
import { sendPostReq } from "@/features/API/sendPostReq";

export async function addToCart(cartObj: TPostCartItem) {
  try {
    const res = await sendPostReq(`${PUBLIC_URL}/api/cart`, cartObj);
    console.log("post cart item api", res);
    return res;
  } catch (err) {
    return {
      ok: false,
      error: err,
      data: [],
    };
  }
}
