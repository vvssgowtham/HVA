let items = JSON.parse(localStorage.getItem("todo-items")) || [];


function saveItems() {
    localStorage.setItem("todo-items", JSON.stringify(items));
}

function updateTodoCount() {
    let node = document.querySelector(".todo-count");
    const activeItems = items.filter(item => !item.completed);
    node.textContent = `${activeItems.length} item${activeItems.length !== 1 ? 's' : ''} left`;
}

function renderTask(task) {
    const list = document.querySelector(".todo-list");
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "view";
    const checkbox = document.createElement("input");
    checkbox.className = "toggle";
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    const label = document.createElement("label");
    label.textContent = task.text;
    const button = document.createElement("button");
    button.className = "destroy";
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(button);
    li.appendChild(div);
    list.appendChild(li);

    if (task.completed) {
        label.style.textDecoration = "line-through";
    }

    checkbox.addEventListener("click", (event) => {
        const label = event.target.nextSibling;
        label.style.textDecoration = event.target.checked ? "line-through" : "none";
        task.completed = event.target.checked;
        updateTodoCount();
        saveItems();
        updateClearCompletedButton();
        applyFilter();
    });

    button.addEventListener("click", (event) => {
        items = items.filter((item) => item !== task);
        event.target.closest('li').remove();
        saveItems();
        updateTodoCount();
        updateClearCompletedButton();
    });
}

function updateClearCompletedButton() {
    const clearCompletedButton = document.querySelector(".clear-completed");
    const anyCompleted = items.some(item => item.completed);
    clearCompletedButton.style.display = anyCompleted ? "block" : "none";
}

// claude ai helped me with this function
function applyFilter() {
    const list = document.querySelector(".todo-list");
    list.innerHTML = "";
    const activeFilter = document.querySelector(".filters .selected").textContent;

    items.forEach((task) => {
        if (activeFilter === "All" ||
            (activeFilter === "Active" && !task.completed) ||
            (activeFilter === "Completed" && task.completed)) {
            renderTask(task);
        }
    });
}

items.forEach((task) => renderTask(task));

document.getElementById("todo-task").addEventListener("keydown", function (event) {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
        const taskText = event.target.value.trim();
        const newTask = { text: taskText, completed: false };
        items.push(newTask);
        renderTask(newTask);
        event.target.value = "";
        updateTodoCount();
        saveItems();
        applyFilter();
    }
});

document.querySelectorAll(".filters a").forEach((filter) => {
    filter.addEventListener("click", (event) => {
        document.querySelectorAll(".filters a").forEach((el) => {
            el.classList.remove("selected");
        });
        event.target.classList.add("selected");
        applyFilter();
    });
});

document.querySelector(".clear-completed").addEventListener("click", () => {
    items = items.filter(item => !item.completed);
    saveItems();
    applyFilter();
    updateTodoCount();
    updateClearCompletedButton();
});

// claude ai helped me with this function
document.querySelector(".toggle-all").addEventListener("click", (event) => {
     const allCompleted = items.every(item => item.completed);
     items.forEach(item => item.completed = !allCompleted);
     document.querySelectorAll(".toggle").forEach((checkbox) => {
          checkbox.checked = !allCompleted;
          checkbox.nextSibling.style.textDecoration = !allCompleted ? "line-through" : "none";
     });
     saveItems();
     updateTodoCount();
     updateClearCompletedButton();
     applyFilter();
});

updateTodoCount();
updateClearCompletedButton();
applyFilter();