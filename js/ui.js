function displayTaskCollection() {
    const taskItemsContainer = document.getElementById("task-items-container");

    taskItemsContainer.innerHTML = "";

    applicationState.taskCollection.forEach(function (taskItem) {
        const taskListItem = document.createElement("li");

        taskListItem.textContent = taskItem.taskDescription;

        taskItemsContainer.appendChild(taskListItem);
    });
}
