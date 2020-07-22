const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = []; //when you create todo, it will add to [] array

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //object => string
}

function paintToDo(text) {
  //   console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deleteToDo);

  span.innerHTML = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj); //todo objects will push to inside the toDos.
  saveToDos(); //call after push something inside it
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function something(toDo) {
  console.log(toDo.text);
}

function loadToDos() {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos !== null) {
    // console.log(loadedTodos);
    const parsedToDos = JSON.parse(loadedTodos);
    // console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      //   console.log(toDo.text); //each of text will print out
      paintToDo(toDos.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
