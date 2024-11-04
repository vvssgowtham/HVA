class Product {
  constructor() {
    this.inventory = [
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
  }

  displayProducts() {
    this.inventory.forEach((product) => {
      console.log(`${product.name} - ${product.price} (${product.quantity})`);
    });
  }

  addProduct = (id, name, price, quantity) => {
    this.inventory.push({ id, name, price, quantity });
  };

  updateProduct = (id, quantity) => {
    const product = this.inventory.find((product) => product.id === id);
    if (product) {
      product.quantity = quantity;
    }
  };

  updateProductWithMap = (id, quantity) => {
    this.inventory = this.inventory.map((product) => {
      if (product.id === id) {
        return { ...product, quantity };
      }
      return product;
    });
  };

  removeProduct = (id) => {
    this.inventory.filter((product) => {
      return product.id !== id;
    });
  };
}

const inventory = new Product();
inventory.displayProducts();
inventory.addProduct(3, "Product 3", 29.99, 12);
inventory.updateProduct(1, 10);
inventory.updateProductWithMap(2, 15);
inventory.removeProduct(3);
inventory.displayProducts();
