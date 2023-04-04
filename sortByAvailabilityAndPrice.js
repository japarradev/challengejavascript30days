function sortByAvailabilityAndPrice(products) 
{
    const inStockProducts = products.filter(element => element.inStock).sort((a,b) => a.price - b.price);
    const outStockProducts = products.filter(element => !element.inStock).sort((a,b) => a.price - b.price);
    
    return [...inStockProducts, ...outStockProducts];

}

const products = [
    { name: "product1", price: 10, inStock: true },
    { name: "product2", price: 20, inStock: false },
    { name: "product3", price: 15, inStock: true },
    { name: "product4", price: 5, inStock: false },
  ]
  
console.log(sortByAvailabilityAndPrice(products));