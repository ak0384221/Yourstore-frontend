export class Cart {
  product: string;
  productId: string;
  quantity: number;
  color: string;
  size: string;

  constructor(
    product: string,
    productId: string,
    quantity: number,
    color: string,
    size: string
  ) {
    this.product = product;
    this.productId = productId;
    this.quantity = quantity;
    this.color = color;
    this.size = size;
  }
}
