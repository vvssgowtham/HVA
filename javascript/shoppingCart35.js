let cart = [
  {
    name: "Item 1",
    price: 10.99,
    quantity: 2,
  },
  {
    name: "Item 2",
    price: 5.99,
    quantity: 1,
  },
  {
    name: "Item 3",
    price: 7.49,
    quantity: 3,
  },
];

const calculateTotalPrice = (cart) =>{
    let totalPrice = 0;
    cart.forEach((item)=>{
        totalPrice+=item.price*item.quantity;
    })
    return totalPrice;
}

console.log(calculateTotalPrice(cart));