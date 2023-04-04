import { Product } from "./product.mjs";


class Article extends Product {
  
    addToCart() 
    {
        super.addToCart();
        return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`;
    }

  }
  
class Service extends Product {
 
    addToCart() 
    {
        super.addToCart();
        return `Agregando el servicio ${this.name} al carrito`;
    }
  }
 
class Cart {
    constructor() {
      this.products = [];
    }
    addProduct(product) {
      this.products.push(product);
      return product.addToCart();
    }
    deleteProduct(product) {
      const index = this.products.findIndex(element => element.name === product.name);
      this.products.splice(index, 1);
    }
    calculateTotal() {
      return this.products.reduce((a, c) => a + c.quantity * c.price, 0);
  
    }
    getProducts() {
      return this.products;
    }
  }
  

// const book = new Article("Libro", 100, 2);
// const course = new Service("Curso", 120, 1);

// const cart = new Cart();
// cart.addProduct(book);
// cart.addProduct(course);


const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
cart.deleteProduct(book);
cart.calculateTotal();

console.log(cart.calculateTotal());
