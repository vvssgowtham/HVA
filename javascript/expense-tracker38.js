class Expense {
  constructor() {
    this.expenses = [
      { id: 1, name: "Groceries", amount: 50, date: "2022-10-01" },
      { id: 2, name: "Gas", amount: 30, date: "2022-10-02" },
      { id: 3, name: "Dinner", amount: 40, date: "2022-10-03" },
    ];
  }
  displayExpenses = () => {
    this.expenses.forEach((expense) => {
      console.log(`${expense.name} - ${expense.amount} (${expense.date})`);
    });
  };
  addExpense = (id, name, amount, date) => {
    this.expenses.push({ id, name, amount, date });
  };
  updateExpense = (id, amount) => {
    const found = this.expenses.find((expense) => expense.id === id);
    if (found) {
      found.amount = amount;
    }
  };
  updateExpenseWithMap = (id, amount) => {
    this.expenses = this.expenses.map((expense) =>
      expense.id === id ? { ...expense, amount } : expense
    );
  };
  removeExpense = (id) => {
    this.expenses = this.expenses.filter((expense) => expense.id !== id);
  };
}

const tracker = new Expense();

tracker.displayExpenses();

tracker.addExpense(4, "Utilities", 100, "2022-10-04");
console.log("After adding a new expense:");
tracker.displayExpenses();

tracker.updateExpense(2, 35);
console.log("After updating an expense using updateExpense:");
tracker.displayExpenses();

tracker.updateExpenseWithMap(3, 45);
console.log("After updating an expense using updateExpenseWithMap:");
tracker.displayExpenses();

tracker.removeExpense(1);
console.log("After removing an expense:");
tracker.displayExpenses();
