let todos = [];
function addTodo() {
  const input = document.querySelector(".todo");
  let val = input.value;
  if (val == "") return;
  todos.push({ text: val, completed: false });
  console.log(todos);
  showTodos();
  input.value = "";
}
function onDelet(index) {
  todos.splice(index, 1);
  console.log(todos);
  showTodos();
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  showTodos();
  console.log(todos);
}

function showTodos() {
  const list = document.querySelector(".todo-list");
  list.innerHTML = "";
  let data = "";
  for (let i = 0; i < todos.length; i++) {
    data += ` <li class="${todos[i].completed ? "completed" : ""}">
          <input type="checkbox" ${
            todos[i].completed ? "checked" : ""
          } onchange='toggleTodo(${i})'/>
          <span>${todos[i].text}</span>
          <button  onclick='onDelet(${i})' >X</button>
        </li>`;
  }
  list.innerHTML = data;
}
showTodos();
