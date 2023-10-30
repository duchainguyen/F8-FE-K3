const apiUrl = "https://v5tspz-8080.csb.app/todoList";
let allTasks = [];

function fetchTasks() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((tasks) => {
      allTasks = tasks;
      displayTasks(tasks);
    })
    .catch((error) => console.error("Error fetching tasks:", error));
}

function displayTasks(tasks) {
  const incompleteTodoList = document.querySelector(".incomplete-todo");
  const completedTodoList = document.querySelector(".completed-todo");

  incompleteTodoList.innerHTML = "";
  completedTodoList.innerHTML = "";

  tasks.forEach((task) => {
    const listItem = createTaskElement(task);
    if (task.completed) {
      completedTodoList.appendChild(listItem);
    } else {
      incompleteTodoList.appendChild(listItem);
    }
  });
}

function addTask() {
  const taskText = document.querySelector(".add-form .todo-title").value.trim();

  if (taskText !== "") {
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: taskText,
        completed: false,
      }),
    })
      .then((response) => response.json())
      .then((newTask) => {
        document.querySelector(".add-form .todo-title").value = "";
        allTasks.push(newTask);
        displayTasks(allTasks);
      })
      .catch((error) => console.error("Error adding task:", error));
  }
}

function searchTasks() {
  const searchTerm = document
    .querySelector(".search-input")
    .value.toLowerCase();
  const matchingTasks = allTasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm)
  );
  displayTasks(matchingTasks);
}

function createTaskElement(task) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
        <span class="title_text">${task.title} </span>
        <div class="action"> <button onclick="deleteTask(${task.id})">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button onclick="editTask(${task.id}, '${task.title}')">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button onclick="toggleTaskCompletion(${task.id})">
            <i class="fa-solid fa-laptop-medical"></i>
          </button></div>
         
       `;

  if (task.completed) {
    listItem.classList.add("completed");
  }

  return listItem;
}
function toggleTaskCompletion(id) {
  const completed = document.querySelector(".fa-laptop-medical");

  const taskIndex = allTasks.findIndex((task) => task.id === id);

  if (taskIndex !== -1) {
    const isCompleted = allTasks[taskIndex].completed;

    fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: allTasks[taskIndex].title,
        completed: !isCompleted,
      }),
    })
      .then((response) => response.json())
      .then((updatedTask) => {
        // Cập nhật trạng thái trong danh sách
        allTasks[taskIndex].completed = !isCompleted;

        // Hiển thị lại danh sách công việc
        displayTasks(allTasks);
      })
      .catch((error) => console.error("Error updating task:", error));
  }
}

function showEditForm() {
  const editForm = document.querySelector(".edit-form");
  editForm.style.opacity = "1";
  editForm.style.visibility = "visible";
}

function hideEditForm() {
  const editForm = document.querySelector(".edit-form");
  editForm.style.opacity = "0";
  editForm.style.visibility = "hidden";
}

function editTask(id, currentTitle) {
  const editForm = document.querySelector(".edit-form");
  editForm.style.opacity = "1";
  editForm.style.visibility = "visible";

  const editInput = editForm.querySelector(".todo-title");
  editInput.value = currentTitle;

  const saveButton = editForm.querySelector("button");
  saveButton.onclick = function () {
    const newTitle = editInput.value;

    fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle }),
    })
      .then((response) => response.json())
      .then((updatedTask) => {
        fetchTasks();
        hideEditForm();
      })
      .catch((error) => console.error("Error updating task:", error));
  };
}

function deleteTask(id) {
  fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((deletedTask) => {
      fetchTasks();
    })
    .catch((error) => console.error("Error deleting task:", error));
}

function saveEditedTask() {
  const id = document.querySelector(".edit-form .todo-title").dataset.id;
  const currentTitle = document
    .querySelector(".edit-form .todo-title")
    .value.trim();

  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: currentTitle }),
  })
    .then((response) => response.json())
    .then((updatedTask) => {
      fetchTasks();
      document.querySelector(".edit-form .todo-title").value = "";
    })
    .catch((error) => console.error("Error updating task:", error));
}

fetchTasks(); // Fetch tasks on page load
