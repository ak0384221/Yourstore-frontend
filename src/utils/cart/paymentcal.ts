function finalPrice(item) {
  return (
    item.productId.price -
    (item.productId.price * item.productId.discount) / 100
  ).toFixed(2);
}
function totalPrice(items) {
  const total = items.reduce((sum, item) => {
    const afterDiscount = finalPrice(item) * item.quantity;
    return sum + afterDiscount;
  }, 0);

  return parseFloat(total.toFixed(2));
}
function subTotal(item) {
  const final = (
    item.productId.price -
    (item.productId.price * item.productId.discount) / 100
  ).toFixed(2);

  const subtotal = final * item.quantity;
  return subtotal.toFixed(2);
}

export { finalPrice, totalPrice, subTotal };
