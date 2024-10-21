let data = JSON.parse(localStorage.getItem("tasks") || "[]");
let id = data.length ? data[data.length - 1].id + 1 : 1;
let editingId = null;

const handleTask = (event) => {
  event.preventDefault();
  const taskTitle = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.getElementById("priorityLevel").value;

  if (editingId === null) {
    // Adding a new task
    id++;
    const obj = {
      id: id,
      Title: taskTitle,
      Description: taskDescription,
      DueDate: dueDate,
      Priority: priority,
      markAsCompletedBoolean: false,
    };
    data.push(obj);
  } else {
    // Updating an existing task
    const taskIndex = data.findIndex((task) => task.id === editingId);
    if (taskIndex !== -1) {
      data[taskIndex] = {
        ...data[taskIndex],
        Title: taskTitle,
        Description: taskDescription,
        DueDate: dueDate,
        Priority: priority,
      };
    }
    editingId = null;
  }
  localStorage.setItem("tasks", JSON.stringify(data));
  displayTasks();
};

const displayTasks = () => {
  const displayTaskContainer = document.getElementById("displayTaskContainer");
  const completedTasksContainer = document.getElementById(
    "completedTasksContainer"
  );
  completedTasksContainer.innerHTML = "";
  displayTaskContainer.innerHTML = "";
  for (const element of data) {
    const ObtainedTaskTitle = element.Title;
    const ObtainedTaskDescription = element.Description;
    const ObtainedDueDate = element.DueDate;
    const ObtainedPriority = element.Priority;

    const divTwo = document.createElement("div");
    divTwo.className = "divTwo";

    const heading = document.createElement("h5");
    heading.textContent = ObtainedTaskTitle;

    const description = document.createElement("p");
    description.textContent = `Description : ${ObtainedTaskDescription}`;

    const handleDueDate = document.createElement("p");
    handleDueDate.textContent = `Due-Date : ${ObtainedDueDate}`;

    const handlePriority = document.createElement("p");
    handlePriority.textContent = `Priority : ${ObtainedPriority}`;

    divTwo.append(heading, description, handleDueDate, handlePriority);

    if (element.markAsCompletedBoolean) {
      divTwo.style.textDecoration = "line-through";
      divTwo.style.backgroundColor = "#d3d3d3";
      completedTasksContainer.appendChild(divTwo);
    } else {
      const button = document.createElement("button");
      button.type = "button";
      button.id = "editTask";
      button.addEventListener("click", () => editTask(element.id));
      button.innerHTML = "Edit task";
      divTwo.append(button);

      const markAsCompletedButton = document.createElement("button");
      markAsCompletedButton.type = "button";
      markAsCompletedButton.addEventListener("click", () =>
        markAsCompleted(element.id)
      );
      markAsCompletedButton.innerHTML = "Mark as completed";
      divTwo.append(markAsCompletedButton);
      displayTaskContainer.append(divTwo);
    }
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.id = "deleteId";
    deleteButton.addEventListener("click", () => deleteTask(element.id));
    deleteButton.innerHTML = "Delete task";
    divTwo.append(deleteButton);
  }
  clearing();
};

const clearing = () => {
  document.getElementById("taskName").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("priorityLevel").value = "Select an option";
};

const editTask = (id) => {
  const task = data.find((task) => task.id === id);
  if (task) {
    document.getElementById("taskName").value = task.Title;
    document.getElementById("description").value = task.Description;
    document.getElementById("dueDate").value = task.DueDate;
    document.getElementById("priorityLevel").value = task.Priority;
    document.getElementById("editTask").textContent = "Update";
    editingId = id;
  }
};

const deleteTask = (id) => {
  data = data.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(data));
  displayTasks();
};

const markAsCompleted = (id) => {
  const task = data.find((task) => task.id === id);
  task.markAsCompletedBoolean = true;
  localStorage.setItem("tasks", JSON.stringify(data));
  displayTasks();
};

const applyFilter = () => {
  document.getElementById("title").style.display = "none";
  document.getElementById("displayTaskContainer").style.display = "none";
  document.getElementById("completedTasksContainer").style.display = "none";
  document.getElementById("titleCompleted").style.display = "none";

  const priorityFilter = document.getElementById("priorityFilter").value;
  const dueDateFilter = document.getElementById("dueDateFilter").value;
  let statusFilter = document.getElementById("statusFilter").value;

  if (statusFilter === "" && priorityFilter === "" && dueDateFilter === "") {
    alert("Select atleast one filter to apply!!!");
    return;
  }

  if (statusFilter === "pending") {
    statusFilter = false;
  } else if (statusFilter === "completed") {
    statusFilter = true;
  } else {
    statusFilter = "none";
  }

  const filteredTasks = data.filter((task) => {
    const taskDueDate = new Date(task.DueDate);
    const currentDate = new Date();
    const daysDifference = (taskDueDate - currentDate) / (1000 * 60 * 60 * 24);

    let isPriorityMatch =
      priorityFilter === "none" ||
      priorityFilter === "" ||
      task.Priority === priorityFilter;

    let isDueDateMatch =
      dueDateFilter === "" ||
      dueDateFilter === "none" ||
      (dueDateFilter === "within7Days" && daysDifference <= 7) ||
      (dueDateFilter === "within14Days" && daysDifference <= 14) ||
      (dueDateFilter === "within21Days" && daysDifference <= 21);

    let isStatusMatch =
      statusFilter === "none" ||
      statusFilter === "" ||
      task.markAsCompletedBoolean === statusFilter;

    return isPriorityMatch && isDueDateMatch && isStatusMatch;
  });

  const filteredDiv = document.getElementById("filteredDiv");
  filteredDiv.innerHTML = "";

  const newDiv = document.createElement("div");
  newDiv.id = "newDivTitle";
  const heading2 = document.createElement("h2");
  heading2.textContent = "Filtered Tasks";
  newDiv.appendChild(heading2);
  filteredDiv.appendChild(newDiv);

  filteredTasks.forEach((task) => {
    const divTwo = document.createElement("div");
    divTwo.className = "divTwo";

    const heading = document.createElement("h5");
    heading.textContent = task.Title;

    const description = document.createElement("p");
    description.textContent = `Description : ${task.Description}`;

    const handleDueDate = document.createElement("p");
    handleDueDate.textContent = `Due-Date : ${task.DueDate}`;

    const handlePriority = document.createElement("p");
    handlePriority.textContent = `Priority : ${task.Priority}`;

    divTwo.appendChild(heading);
    divTwo.appendChild(description);
    divTwo.appendChild(handleDueDate);
    divTwo.appendChild(handlePriority);
    filteredDiv.appendChild(divTwo);
  });
  filteredDiv.style.display = "block";
};

displayTasks();
