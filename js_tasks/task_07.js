// Example:
// let cart = [
//  {name:"Laptop", price:800},
//  {name:"Mouse", price:20},
//  {name:"Keyboard", price:50}
// ];
// Tasks:
// 1.	Calculate total price
// 2.	Add a new product
// 3.	Remove a product
// 4.	Print all products


let cart = [
 {name:"Laptop", price:800},
 {name:"Mouse", price:20},
 {name:"Keyboard", price:50}
];

function totalPrice(items){
  let total = 0;
  for(let item of items){
    total += item.price;
  }
  return total;
}

function addProduct(items, product){
  items.push(product);
}

function removeProduct(items, productName){
  return items.filter(item => item.name !== productName);
}

function printProducts(items){
  for(let item of items){
    console.log(item.name + " - $" + item.price);
  }
}

console.log("Total Price:", totalPrice(cart));
addProduct(cart,{name:"Headphones", price:100});
cart = removeProduct(cart,"Mouse");
console.log("Products in Cart:");
printProducts(cart);