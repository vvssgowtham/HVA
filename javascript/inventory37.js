let inventory = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    quantity: 5,
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    quantity: 8,
  },
];

class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

const displayProducts = () => {
  inventory.forEach((product) => {
    console.log(
      `${product.name} - ${product.price} (${product.quantity})`
    );
  });
};

const addProduct = (id, name, price, quantity) => {
  const newProduct = new Product(id, name, price, quantity);
  inventory.push(newProduct);
};

const updateProduct = (id, quantity) => {
  const product = inventory.find((product) => product.id === id);
  if (product) {
    product.quantity = quantity;
  }
};

const updateProductWithMap = (id, quantity) => {
  inventory = inventory.map((product) => {
    if (product.id === id) {
      return { ...product, quantity };
    }
    return inventory;
  });
};

const removeProduct = (id) => {
  inventory = inventory.filter((product) => {
    return product.id !== id;
  });
};