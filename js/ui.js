licationState.taskCollection.forEach(function (taskItem) {
        const taskListItem = document.createElement("li");

        taskListItem.textContent = taskItem.taskDescription;

        if (taskItem.taskCompleted) {
            taskListItem.style.textDecoration = "line-through";
            taskListItem.style.color = "gray";
        }

        taskListItem.addEventListener("click", function () {
            updateTaskCompletionStatus(taskItem.taskIdentifier);
        });

        taskItemsContainer.appendChild(taskListItem);
    });
}
