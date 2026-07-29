const TASK_STORAGE_KEY = "weekSevenTaskCollection";

function saveTaskCollection(taskCollection) {
    localStorage.setItem(
        TASK_STORAGE_KEY,
        JSON.stringify(taskCollection)
    );
}

function loadTaskCollection() {
    const savedTaskCollection = localStorage.getItem(TASK_STORAGE_KEY);

    if (savedTaskCollection) {
        return JSON.parse(savedTaskCollection);
    }

    return [];
}
