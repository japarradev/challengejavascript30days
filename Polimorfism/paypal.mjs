import { Pay } from "./pay.mjs";

export class PayPal extends Pay {
    constructor(email)
    {
        super()
        this.email = email
    }
    makePay(quantity)
    {
        return{
            ...super.makePay(quantity),
            platform: "PayPal",
            email:this.email
        }
    }
  }