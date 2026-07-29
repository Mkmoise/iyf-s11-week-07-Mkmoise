const TASKS_STORAGE_KEY = "weekSevenTasks";

function saveTaskCollection(taskCollection) {
    localStorage.setItem(
        TASKS_STORAGE_KEY,
        JSON.stringify(taskCollection)
    );
}

function loadTaskCollection() {
    const savedTaskCollection = localStorage.getItem(TASKS_STORAGE_KEY);

    if (savedTaskCollection) {
        return JSON.parse(savedTaskCollection);
    }

    return [];
}
