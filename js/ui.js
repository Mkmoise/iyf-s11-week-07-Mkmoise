function displayTaskCollection() {
    const taskItemsContainer = document.getElementById("task-items-container");

    taskItemsContainer.innerHTML = "";

    /*applicationState.taskCollection.forEach(function (taskItem)*/
        let filteredTaskCollection = applicationState.taskCollection;

if (applicationState.activeTaskFilter === "active") {
    filteredTaskCollection = applicationState.taskCollection.filter(function (taskItem) {
        return !taskItem.taskCompleted;
    });
}

if (applicationState.activeTaskFilter === "completed") {
    filteredTaskCollection = applicationState.taskCollection.filter(function (taskItem) {
        return taskItem.taskCompleted;
    });
}

filteredTaskCollection.forEach(function (taskItem) {{
        const taskListItem = document.createElement("li");

        const taskDescriptionSpan = document.createElement("span");
        taskDescriptionSpan.textContent = taskItem.taskDescription;

/*        if (taskItem.taskCompleted) {
            taskDescriptionSpan.style.textDecoration = "line-through";
            taskDescriptionSpan.style.color = "gray";      }*/
if (taskItem.taskCompleted) {
    taskDescriptionSpan.classList.add("completed-task");
}

        taskDescriptionSpan.addEventListener("click", function () {
            updateTaskCompletionStatus(taskItem.taskIdentifier);
        });

        const deleteTaskButton = document.createElement("button");
        deleteTaskButton.textContent = "Delete";

        deleteTaskButton.addEventListener("click", function () {
            deleteTask(taskItem.taskIdentifier);
        });

        taskListItem.appendChild(taskDescriptionSpan);
        taskListItem.appendChild(deleteTaskButton);

        taskItemsContainer.appendChild(taskListItem);
    });
}

