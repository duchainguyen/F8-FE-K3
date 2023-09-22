var newTaskInput = document.getElementById("new-task");
var addTaskButton = document.getElementById("add-task");
var taskList = document.getElementById("tasks");

// Hàm để thêm một task mới
function addTask() {
  // rỗng thi k cho add
  var taskText = newTaskInput.value.trim();
  if (taskText === "") {
    return;
  }

  var taskItem = document.createElement("li");
  taskItem.innerHTML = `
        <span class="taskText">${taskText}</span>
        <div class="actions">
          <button class="edit"><i class="fas fa-edit"></i></button>
          <button class="delete"><i class="fas fa-trash"></i></button>
          <button class="save" hidden>Add Task</button>
        </div>
      `;

  // Thêm sự kiện sửa task khi click vào "edit"
  var editButton = taskItem.querySelector(".edit");
  editButton.addEventListener("click", function () {
    editTask(taskItem);
    taskItem.style.justifyContent = "center";
    taskItem.style.background = "none";
    taskItem.style.padding = "0";
  });

  // Thêm sự kiện xóa task khi click vào nút "delete"
  var deleteButton = taskItem.querySelector(".delete");
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });

  // Thêm task vào danh sách
  taskList.appendChild(taskItem);

  // Xóa nội dung input sau khi thêm task
  newTaskInput.value = "";
}

// Hàm để sửa task
function editTask(taskItem) {
  var taskTextElement = taskItem.querySelector(".taskText");
  var editButton = taskItem.querySelector(".edit");
  var deleteButton = taskItem.querySelector(".delete");
  var saveButton = taskItem.querySelector(".save");

  // Lưu nội dung gốc của task để khi cần lưu lại
  var originalText = taskTextElement.innerText;

  // Ẩn nút "Edit" và "Delete" hiển thị nút "Save"
  editButton.style.display = "none";
  deleteButton.style.display = "none";
  saveButton.style.display = "inline-block";

  // Tạo một input để chỉnh sửa task
  var inputElement = document.createElement("input");
  // class của input
  inputElement.classList.add("text-edit");
  inputElement.type = "text";
  inputElement.placeholder = "Update Task";
  inputElement.value = originalText;
  // Thêm input vào taskItem
  taskItem.replaceChild(inputElement, taskTextElement);

  // Focus vào input để người dùng có thể chỉnh sửa
  inputElement.focus();

  // Sự kiện lưu lại task sau khi chỉnh sửa
  saveButton.addEventListener("click", function () {
    // Lấy nội dung mới sau khi chỉnh sửa
    taskItem.style.background = "#8758ff";
    taskItem.style.padding = "5px 16px";

    var updatedText = inputElement.value.trim();

    if (updatedText === "") {
      alert("Please enter a task!");
      return;
    }

    // Cập nhật nội dung task
    taskTextElement.innerText = updatedText;

    // Ẩn nút "Save" và hiển thị nút "Edit" và "Delete"
    editButton.style.display = "inline-block";
    deleteButton.style.display = "inline-block";
    saveButton.style.display = "none";

    // Loại bỏ input và sự kiện lưu
    taskItem.replaceChild(taskTextElement, inputElement);
  });
}

// Thêm sự kiện thêm task khi click vào nút "Add"
addTaskButton.addEventListener("click", addTask);

// Thêm sự kiện thêm task khi nhấn phím "Enter" trong input
newTaskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});
// var textEdit = document.querySelector(".text-edit");
// textEdit.editButton("keydown", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     addTask();
//   }
// });

// console.log(textEdit);
