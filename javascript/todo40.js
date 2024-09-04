let tasks = [
  {
    id: 1,
    description: "Finish homework",
    dueDate: "2022-10-15",
    status: "incomplete",
  },
  {
    id: 2,
    description: "Buy groceries",
    dueDate: "2022-10-20",
    status: "incomplete",
  },
  {
    id: 3,
    description: "Call mom",
    dueDate: "2022-10-18",
    status: "incomplete",
  },
];

class Task {
  constructor(id, description, dueDate, status) {
    this.id = id;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
  }
}

const displayTasks = () => {
  tasks.forEach((task) => {
    console.log(`${task.description} - ${task.dueDate}(${task.status})`);
  });
};

const addTask = (id, description, dueDate, status) => {
  tasks.push(new Task(id, description, dueDate, status));
};

const updateTask = (id, status) => {
  const foundTask = tasks.find((task) => {
    task.id === id;
  });
  if (foundTask) {
    foundTask.status = status;
  }
};

const updateTaskWithMap = (id, status) => {
  const newArray = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, status };
    }
  });
  return newArray;
};

const removeTask = (id) => {
  const filteredArray = tasks.filter((task) => {
    return !task.id === id;
  });
  return filteredArray;
};

// Test the functions
displayTasks();

addTask(4, "Read a book", "2022-10-25", "incomplete");
console.log("After adding a new task:");
displayTasks();

updateTask(2, "completed");
console.log("After updating a task using updateTask:");
displayTasks();

updateTaskWithMap(3, "completed");
console.log("After updating a task using updateTaskWithMap:");
displayTasks();

removeTask(1);
console.log("After removing a task:");
displayTasks();
