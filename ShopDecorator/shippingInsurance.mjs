import { Product } from "./product.mjs";

export class ShippingInsuranceDecorator extends Product {
  constructor(product) {
    super(product.price);
    this.product = product;
  }

  getPrice() {
    return this.product.getPrice() + 20;
  }

  getDescription() 
  {
    return `${this.product.getDescription()} con seguro de envío` ;
  }
}