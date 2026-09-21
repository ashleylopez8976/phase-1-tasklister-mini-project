document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = event.target.elements["new-task-description"].value;

    buildToDo(taskDescription);
  });

  function buildToDo(taskDescription) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    const taskList = document.getElementById("tasks");
    taskList.appendChild(taskItem);
   }
});
