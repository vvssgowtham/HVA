let inventory = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99,
    quantity: 5,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.99,
    quantity: 3,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 9.99,
    quantity: 7,
  },
];

class Book {
  constructor(id, title, author, price, quantity) {
    this.id = id;
    this.author = author;
    this.price = price;
    this.title = title;
    this.quantity = quantity;
  }
}

const displayBooks = () => {
  inventory.forEach((book) => {
    console.log(`${book.title} - ${book.author} (${book.price})`);
  });
};

const addBook = (id, title, author, price, quantity) => {
  inventory.push(new Book(id, title, author, price, quantity));
};

const updateBook = (id, quantity) => {
  const bookFound = inventory.find((book) => book.id === id);
  if (bookFound) {
    bookFound.quantity = quantity;
  }
};

const updateBookWithMap = (id, quantity) => {
  const newArray = inventory.map((book) => {
    if (book.id === id) {
      return { ...book, quantity };
    }
  });
  return newArray;
};

const removeBook = (id) => {
  const filteredArray = inventory.filter((book) => {
    return !book.id === id;
  });
  inventory = filteredArray;
};

// Test the functions
displayBooks();
addBook(4, "New Book", "New Author", 14.99, 10);
updateBook(2, 5);
updateBookWithMap(3, 2);
removeBook(1);
displayBooks();
