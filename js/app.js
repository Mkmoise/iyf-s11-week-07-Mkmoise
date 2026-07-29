const taskEntryField = document.getElementById("task-entry-field");
const createTaskButton = document.getElementById("create-task-button");
const taskItemsContainer = document.getElementById("task-items-container");

function createTaskItem() {
    const taskText = taskEntryField.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskListItem = document.createElement("li");
    taskListItem.textContent = taskText;

    taskItemsContainer.appendChild(taskListItem);

    taskEntryField.value = "";
}

createTaskButton.addEventListener("click", createTaskItem);
