export class Cart {
  product: string;
  productId: string;
  quantity: number;
  color: string;
  size: string;
  finalAmount: number;

  constructor(
    product: string,
    productId: string,
    quantity: number,
    color: string,
    size: string,
    finalAmount: number
  ) {
    this.product = product;
    this.productId = productId;
    this.quantity = quantity;
    this.color = color;
    this.size = size;
    this.finalAmount = finalAmount;
  }
}
