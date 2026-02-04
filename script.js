const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

let count = 0;

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Écris une tâche !");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  taskList.appendChild(li);

  input.value = "";
  count++;
  counter.textContent = count + " tâche(s)";
});
