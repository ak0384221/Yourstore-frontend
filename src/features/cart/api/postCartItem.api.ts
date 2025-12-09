import { TPostCartItem } from "@/features/cart/types/cartItem";
import { BASE_URL } from "@/features/API/baseApi";
import type { Dispatch, SetStateAction, RefObject } from "react";
import { sendPostReq } from "@/features/API/sendPostReq";

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
