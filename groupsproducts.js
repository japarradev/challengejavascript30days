function groupProducts(products, category) 
{
    return{
        products: products.filter(item => item.category === category).map(item => item.name).join(', '),
        totalPrice: products.filter(item => item.category === category).reduce((a, c) => a + c.price, 0)
    };
}


const products = [
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Pants", category: "Clothing", price: 100 },
  ];
  
  console.log(groupProducts(products, "Clothing"));


  const numbers = [1, 2, 3, 4];

const result = numbers.flatMap(x => [x, x+1,  x * 2]);

console.log(result);
// Output: [1, 2, 2, 4, 3, 6, 4, 8]
