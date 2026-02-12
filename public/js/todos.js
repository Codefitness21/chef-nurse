const deleteBtn = document.querySelectorAll(".del");
const todoItem = document.querySelectorAll("span.not");
const todoComplete = document.querySelectorAll("span.completed");
const editBtn = document.querySelectorAll(".edit");
const updateBtn = document.querySelectorAll(".save-btn");
const cancelBtn = document.querySelectorAll(".cancel-btn");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteTodo);
});

Array.from(todoItem).forEach((el) => {
  el.addEventListener("click", markComplete);
});

Array.from(todoComplete).forEach((el) => {
  el.addEventListener("click", markIncomplete);
});

Array.from(editBtn).forEach((el) => {
  el.addEventListener("click", editTodo);
});

Array.from(updateBtn).forEach((el) => {
  el.addEventListener("click", saveTodo);
});

Array.from(cancelBtn).forEach((el) => {
  el.addEventListener("click", cancelTodo);
});

async function cancelTodo() {
  const todoItem = this.closest(".todoItem");
  const editInput = todoItem.querySelector(".todoText");
  const editForm = todoItem.querySelector(".editForm");

  editInput.style.display = "none";
  editForm.style.display = "inline";

  try {
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function deleteTodo() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("/todos/deleteTodo", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markIncomplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

function editTodo() {
  const todoItem = this.closest(".todoItem");
  const todoText = todoItem.querySelector(".todoText");
  const editForm = todoItem.querySelector(".editForm");

  todoText.style.display = "none";
  editForm.style.display = "inline";
}

async function saveTodo() {
  const todoItem = this.closest(".todoItem");
  const todoId = todoItem.dataset.id;
  const updatedText = todoItem.querySelector(".editInput").value;
 
  try {
    const response = await fetch("/todos/saveTodo", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
        updatedText: updatedText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
