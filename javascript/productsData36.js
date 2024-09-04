let products = [
  { id: 1, name: "Product 1", price: 8.99, category: "Food" },
  { id: 2, name: "Product 2", price: 19.99, category: "Electronics" },
  { id: 3, name: "Product 3", price: 7.99, category: "Food" },
  { id: 4, name: "Product 4", price: 9.99, category: "Clothing" },
  { id: 5, name: "Product 5", price: 12.99, category: "Food" },
];

const displayProducts = (products) => {
  products.forEach((product) => {
    console.log(product.name + " - $" + product.price);
  });

  const productsWithTax = products.map((product) => {
    // ... indicate REST operator which means includes previously available content and add priceWithTax.
    return {
      ...product,
      priceWithTax: product.price * 1.1,
    };
  });
  return productsWithTax;
};

console.log(displayProducts(products));

const foodProducts = products.filter((product) => {
  return product.category === "Food";
});

console.log(foodProducts);

const affordableProducts = products.filter((product) => {
  return product.price < 10;
});

const affordableProductsStrings = affordableProducts.map((product) => {
  return product.name + " - $" + product.price;
});

console.log(affordableProductsStrings);

let totalPrice = 0;
for (let index = 0; index < products.length; index++) {
  totalPrice += products[index].price;
}

console.log(totalPrice);
