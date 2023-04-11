import { Pay } from "./pay.mjs";

export class Card extends Pay {
    constructor(card)
    {
        super()
        this.card = card
    }
    makePay(quantity)
    {
        if (this.card.length === 16)
        {
            return{
                ...super.makePay(quantity),
                platform: "Card",
                lastCardNumber: this.card.substring(12)
            }
        }
        else
        {
            throw new Error('The card no contains 16 numbers')
        }
    }
  }
  