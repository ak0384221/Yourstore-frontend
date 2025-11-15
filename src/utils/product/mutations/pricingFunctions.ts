function totalDiscount(
  regularDiscount: number = 0,
  saleDiscount: number = 0
): number | string {
  if (saleDiscount === 0) {
    return Number(regularDiscount.toFixed(2));
    //only regulardiscount
  } else if (saleDiscount > 0 && regularDiscount > 0) {
    const total = Number(regularDiscount) + Number(saleDiscount);
    return Number(total.toFixed(2));
    //Regular+sales
  } else {
    return "must be greater than 0";
  }
}

function finalAmount(
  basePrice: number,
  totalDiscount: number | string
): number | string {
  if (typeof totalDiscount === "string") {
    return "discount must be a number";
  }
  const discounted = (Number(basePrice) * Number(totalDiscount)) / 100;
  return Number((basePrice - discounted).toFixed(2));
}

export { totalDiscount, finalAmount };
