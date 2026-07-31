// Format text by removing extra spaces
function formatText(text) {
    if (typeof text !== "string") {
        return "";
    }

    return text.trim();
}

// Format a task title
function formatTaskTitle(title) {
    if (typeof title !== "string") {
        return "";
    }

    return title.trim().toUpperCase();
}

// Export functions for testing
module.exports = {
    formatText,
    formatTaskTitle
};
