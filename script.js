function addTask(event) {
    event.preventDefault(); // empêche le rechargement

    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (input.value.trim() === "") {
        alert("Écris une tâche !");
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    taskList.appendChild(li);
    input.value = "";
}


