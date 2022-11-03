const toDoform = document.getElementById("todoform");
const toDoInput = toDoform.querySelector("input");
const toDoList = document.querySelector("#todoList");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteList(event) {
  const list = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(list.id));
  list.remove();
  saveTodos();
}

function paintToDo(newToDo) {
  const list = document.createElement("li");
  list.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const btn = document.createElement("button");
  btn.innerText = "❎";
  btn.addEventListener("click", deleteList);
  toDoList.appendChild(list);
  list.appendChild(span);
  list.appendChild(btn);
  toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveTodos();
}

toDoform.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}