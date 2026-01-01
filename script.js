function saveTasks() {
  localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}
document.getElementById("taskList").innerHTML =
  localStorage.getItem("tasks") || "";
saveTasks();
const date = new Date().toLocaleDateString();
li.textContent = input.value + " (" + date + ")";


