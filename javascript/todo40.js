class Task {
  constructor() {
    this.tasks = [
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
  }

  displayTasks() {
    this.tasks.forEach((task) => {
      console.log(`${task.description} - ${task.dueDate} (${task.status})`);
    });
  }

  addTask(id, description, dueDate, status) {
    this.tasks.push({ id, description, dueDate, status });
  }

  updateTask(id, status) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.status = status;
    }
  }

  updateTaskWithMap(id, status) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status };
      }
      return task;
    });
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}

const taskManager = new Task();
taskManager.displayTasks();

taskManager.addTask(4, "Read a book", "2022-10-25", "incomplete");
console.log("After adding a new task:");
taskManager.displayTasks();

taskManager.updateTask(2, "completed");
console.log("After updating a task using updateTask:");
taskManager.displayTasks();

taskManager.updateTaskWithMap(3, "completed");
console.log("After updating a task using updateTaskWithMap:");
taskManager.displayTasks();

taskManager.removeTask(1);
console.log("After removing a task:");
taskManager.displayTasks();
