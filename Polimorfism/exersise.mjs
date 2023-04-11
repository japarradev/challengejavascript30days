import { PayPal } from "./paypal.mjs";
import { Card } from    "./card.mjs";
import { Cash } from    "./cash.mjs";

function processPay(method, quantity) {
    return method.makePay(quantity)
  }

// const card = new Card("4913478952471122")
// console.log(processPay(card, 100))

// const paypal = new PayPal("test@mail.com")
// console.log(processPay(paypal, 240))

const cash = new Cash()
console.log(processPay(cash, 400))