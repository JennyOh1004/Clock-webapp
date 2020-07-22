const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = []; //when you create todo, it will add to [] array

function paintToDo(text) {
  //   console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "❌";
  const span = document.createElement("span");
  span.innerHTML = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: toDos.length + 1,
  };
  toDos.push(toDoObj); //todo objects will push to inside the toDos.
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos !== null) {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
