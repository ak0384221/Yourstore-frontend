import { TGetCartItem } from "@/types/cartItem";
import { TOrderSummary } from "@/types/order";

function totalDiscount(
  regularDiscount: number = 0,
  saleDiscount: number = 0
): number {
  if (saleDiscount === 0) {
    return Number(regularDiscount.toFixed(2));
    //only regulardiscount
  } else if (saleDiscount > 0 && regularDiscount > 0) {
    const total = Number(regularDiscount) + Number(saleDiscount);
    return Number(total.toFixed(2));
    //Regular+sales
  } else {
    return 0;
  }
}

function finalAmount(basePrice: number, totalDiscount: number): number {
  const discounted = (Number(basePrice) * Number(totalDiscount)) / 100;
  return Number(basePrice - discounted);
}

function calculateTotalPrice(items: TGetCartItem[]) {
  return items.map((item) => {
    return {
      Pname: item.product.name,
      Pid: item.product.productId,
      finalPrice: finalAmount(
        item.product.basePrice,
        totalDiscount(item.product.discountPercent, item.product.salePercent)
      ),
      qty: item.quantity,
    };
  });
}

function calculateTotalAmount(items: TOrderSummary[]) {
  return items.reduce((total, item) => {
    return total + item.finalPrice * item.qty;
  }, 0);
}

export {
  totalDiscount,
  finalAmount,
  calculateTotalPrice,
  calculateTotalAmount,
};
