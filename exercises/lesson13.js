// Lesson 13: Local Storage Basics

// Store a simple value
localStorage.setItem("username", "John");

// Retrieve the value
const storedUsername = localStorage.getItem("username");
console.log(storedUsername);

// Remove a value
localStorage.removeItem("username");

// Store an object using JSON
const userProfile = {
    name: "John",
    age: 30,
    hobbies: ["coding", "reading"]
};

localStorage.setItem(
    "userProfile",
    JSON.stringify(userProfile)
);

const retrievedUserProfile = JSON.parse(
    localStorage.getItem("userProfile")
);

console.log(retrievedUserProfile);

// Helper functions
function saveToStorage(storageKey, data) {
    localStorage.setItem(storageKey, JSON.stringify(data));
}

function getFromStorage(storageKey, defaultValue = null) {
    const savedData = localStorage.getItem(storageKey);

    if (savedData) {
        return JSON.parse(savedData);
    }

    return defaultValue;
}

function removeFromStorage(storageKey) {
    localStorage.removeItem(storageKey);
}

// Example usage
saveToStorage("settings", {
    theme: "dark",
    fontSize: 16
});

const applicationSettings = getFromStorage("settings", {
    theme: "light",
    fontSize: 14
});

console.log(applicationSettings);

removeFromStorage("settings");
