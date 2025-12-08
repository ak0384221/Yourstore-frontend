import { TPostCartItem } from "@/types/cartItem";
import { BASE_URL } from "@/utils/baseApi";
import { sendPostReq } from "@/utils/product/mutations/sendPostReq";
import type { Dispatch, SetStateAction, RefObject } from "react";

export async function addToCart(
  cartObj: TPostCartItem,
  setCartMessage: Dispatch<SetStateAction<string>>,
  setIsAddingToCart: Dispatch<SetStateAction<boolean>>,
  isLocked: RefObject<boolean>
) {
  try {
    const res = await sendPostReq(
      `${BASE_URL}/api/cart`,
      cartObj,
      setCartMessage
    );
  } catch (err) {
    setCartMessage("failed");
  } finally {
    setIsAddingToCart(false);
    isLocked.current = false;
  }
}
