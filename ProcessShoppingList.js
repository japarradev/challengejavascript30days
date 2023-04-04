function processShoppingList(list) 
{
    let total = 0;
    list.forEach(element => {
      let itemTotal = 0;
     if(element.name.includes('oferta'))
     {
      itemTotal = (element.price * 0.8) * element.quantity;
     }
     else
     {
      itemTotal = element.price * element.quantity;
     }

     element.price = itemTotal;
     delete element.quantity;
     
     total += itemTotal;

    });

    return total;
}

// Input

const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
]

console.log(processShoppingList(shoppingList));
console.log(shoppingList);

