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

function updateTaskCompletionStatus(taskIdentifier) {
    applicationState.taskCollection =
        applicationState.taskCollection.map(function (taskItem) {

            if (taskItem.taskIdentifier === taskIdentifier) {
                return {
                    ...taskItem,
                    taskCompleted: !taskItem.taskCompleted
                };
            }

            return taskItem;
        });

    saveTaskCollection(applicationState.taskCollection);

    displayTaskCollection();
}


createTaskButton.addEventListener("click", createTask);

displayTaskCollection();
