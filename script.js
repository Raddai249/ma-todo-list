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

  // créer li
  const li = document.createElement("li");

  // texte de la tâche
  const span = document.createElement("span");
  span.textContent = taskText;

  // bouton supprimer
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", () => {
    li.remove();
    count--;
    counter.textContent = count + " tâche(s)";
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = "";
  count++;
  counter.textContent = count + " tâche(s)";
});
