const {
    formatText,
    formatTaskTitle
} = require("./format");

// Test 1
console.assert(
    formatText("  Hello  ") === "Hello",
    "Test 1 Failed"
);

// Test 2
console.assert(
    formatText("") === "",
    "Test 2 Failed"
);

// Test 3
console.assert(
    formatTaskTitle("buy milk") === "BUY MILK",
    "Test 3 Failed"
);

// Test 4 (Edge Case)
console.assert(
    formatTaskTitle(null) === "",
    "Test 4 Failed"
);

console.log("All tests passed!");
