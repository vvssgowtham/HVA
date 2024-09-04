let expenses = [
  { id: 1, name: "Groceries", amount: 50, date: "2022-10-01" },
  { id: 2, name: "Gas", amount: 30, date: "2022-10-02" },
  { id: 3, name: "Dinner", amount: 40, date: "2022-10-03" },
];

class Expense {
  constructor(id, name, amount, date) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.date = date;
  }
}

const displayExpenses = () => {
  expenses.forEach((expense) => {
    console.log(`${expense.name} - ${expense.amount} (${expense.date})`);
  });
};

const addExpense = (id, name, amount, date) => {
  expenses.push(new Expense(id, name, amount, date));
};

const updateExpense = (id, amount) => {
  const found = expenses.find((expense) => expense.id === id);
  if (found) {
    found.amount = amount;
  }
};

const updateExpenseWithMap = (id, amount) => {
  expenses = expenses.map((expense) =>
    expense.id === id ? { ...expense, amount } : expense
  );
};

const removeExpense = (id) => {
  expenses = expenses.filter((expense) => expense.id !== id);
};


displayExpenses();

addExpense(4, "Utilities", 100, "2022-10-04");
console.log("After adding a new expense:");
displayExpenses();

updateExpense(2, 35);
console.log("After updating an expense using updateExpense:");
displayExpenses();

updateExpenseWithMap(3, 45);
console.log("After updating an expense using updateExpenseWithMap:");
displayExpenses();

removeExpense(1);
console.log("After removing an expense:");
displayExpenses();
