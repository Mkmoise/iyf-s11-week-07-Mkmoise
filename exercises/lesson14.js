// Lesson 14: JavaScript Best Practices

// Meaningful variable names
const currentDate = new Date();

const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 16 },
    { name: "Mary", age: 30 }
];

const adultUsers = users.filter(function (user) {
    return user.age >= 18;
});

console.log(currentDate);
console.log(adultUsers);

// Avoid magic numbers
const MIN_PASSWORD_LENGTH = 8;

function isPasswordValid(password) {
    return password.length >= MIN_PASSWORD_LENGTH;
}

console.log(isPasswordValid("password123"));

// Single responsibility principle
function normalizeName(name) {
    return name.trim();
}

function normalizeEmail(email) {
    return email.toLowerCase().trim();
}

const name = normalizeName("  John Doe  ");
const email = normalizeEmail("John@Example.COM");

console.log(name);
console.log(email);

// Debugging examples
console.log("Application started");
console.warn("This is a warning example");
console.error("This is an error example");

console.table(users);

console.group("User Information");
console.log(name);
console.log(email);
console.groupEnd();
