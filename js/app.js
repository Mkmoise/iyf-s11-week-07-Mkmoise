const taskEntryField = document.getElementById("task-entry-field");
const createTaskButton = document.getElementById("create-task-button");

function createTask() {
    const taskDescription = taskEntryField.value.trim();

    if (taskDescription === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = {
        taskIdentifier: Date.now(),
        taskDescription: taskDescription,
        taskCompleted: false
    };

    applicationState.taskCollection.push(newTask);

    saveTaskCollection(applicationState.taskCollection);

    displayTaskCollection();

    taskEntryField.value = "";
}

createTaskButton.addEventListener("click", createTask);

displayTaskCollection();
