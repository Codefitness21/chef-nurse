document.querySelector('.add-recipe-btn').addEventListener('click', openNewRecipeBook)
document.querySelector('.close-btn').addEventListener('click', closeNewRecipeBook)
document.querySelector('.addBtn').addEventListener('click', openBrowser)

function openNewRecipeBook(){
    document.querySelector('.search-overlay').style.height = "50%"
    document.querySelector('.browser-overlay').style.height = "0%"
}

function closeNewRecipeBook(){
    document.querySelector('.search-overlay').style.height = "0%"
}

// const deleteBtn = document.querySelectorAll(".del");
// const editBtn = document.querySelectorAll(".edit");
// const updateBtn = document.querySelectorAll(".save-btn");
// const cancelBtn = document.querySelectorAll(".cancel-btn");

// Array.from(deleteBtn).forEach((el) => {
//   el.addEventListener("click", deleteTodo);
// });

// Array.from(editBtn).forEach((el) => {
//   el.addEventListener("click", editTodo);
// });

// Array.from(updateBtn).forEach((el) => {
//   el.addEventListener("click", saveTodo);
// });

// Array.from(cancelBtn).forEach((el) => {
//   el.addEventListener("click", cancelTodo);
// });

// async function deleteTodo() {
//   const todoId = this.parentNode.dataset.id;
//   try {
//     const response = await fetch("/todos/deleteTodo", {
//       method: "delete",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify({
//         todoIdFromJSFile: todoId,
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//     location.reload();
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function cancelTodo() {
//   const todoItem = this.closest(".todoItem");
//   const editInput = todoItem.querySelector(".todoText");
//   const editForm = todoItem.querySelector(".editForm");

//   editInput.style.display = "none";
//   editForm.style.display = "inline";

//   try {
//     location.reload();
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function editTodo() {
//   const todoItem = this.closest(".todoItem");
//   const todoText = todoItem.querySelector(".todoText");
//   const editForm = todoItem.querySelector(".editForm");
//   const todoId = todoItem.dataset.id;
//   const updatedText = todoItem.querySelector(".editInput").value;

//   todoText.style.display = "none";
//   editForm.style.display = "inline";

//    try {
    
//     const data = await response.json();
//     console.log(data);
//     location.reload();
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function saveTodo() {
//   const todoItem = this.closest(".todoItem");
//   const todoId = todoItem.dataset.id;
//   const updatedText = todoItem.querySelector(".editInput").value;
 
//   try {
//     const response = await fetch("/todos/saveTodo", {
//       method: "put",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify({
//         todoIdFromJSFile: todoId,
//         updatedText: updatedText,
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//     location.reload();
//   } catch (err) {
//     console.log(err);
//   }
// }
