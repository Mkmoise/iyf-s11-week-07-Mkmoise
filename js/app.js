const taskEntryField = document.getElementById("task-entry-field");
const createTaskButton = document.getElementById("create-task-button");

const displayAllTasksButton = document.getElementById("display-all-tasks-button");
const displayActiveTasksButton = document.getElementById("display-active-tasks-button");
const displayCompletedTasksButton = document.getElementById("display-completed-tasks-button");

function createTask() {
    const taskDescription = cleanInput(taskEntryField.value);

    if (taskDescription === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = {
        taskIdentifier: generateTaskId(),
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

function deleteTask(taskIdentifier) {
    applicationState.taskCollection =
        applicationState.taskCollection.filter(function (taskItem) {
            return taskItem.taskIdentifier !== taskIdentifier;
        });

    saveTaskCollection(applicationState.taskCollection);

    displayTaskCollection();
}

function updateTaskFilter(taskFilter) {
    applicationState.activeTaskFilter = taskFilter;
    displayTaskCollection();
}

createTaskButton.addEventListener("click", createTask);

displayAllTasksButton.addEventListener("click", function () {
    updateTaskFilter("all");
});

displayActiveTasksButton.addEventListener("click", function () {
    updateTaskFilter("active");
});

displayCompletedTasksButton.addEventListener("click", function () {
    updateTaskFilter("completed");
});

displayTaskCollection();
