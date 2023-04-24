import { BasicProduct } from "./basicProduct.mjs";
import { WarrantyDecorator } from "./warrantyDecorator.mjs";
import { ShippingInsuranceDecorator } from "./shippingInsurance.mjs";


const basicProduct = new BasicProduct(100, "Camisa de algodón");
const withWarranty = new WarrantyDecorator(basicProduct);
const withShippingInsurance = new ShippingInsuranceDecorator(withWarranty);
console.log(withShippingInsurance.getPrice());
console.log(withShippingInsurance.getDescription());