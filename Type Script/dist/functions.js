"use strict";
// 🔥 FUNCTIONS IN TYPESCRIPT (TYPED, OPTIONAL, DEFAULT PARAMETERS)
// 1️⃣ TYPED FUNCTION
// JS function (no type safety)
// function addJS(a, b) {
//   return a + b;
// }
// TS typed function
function addTS(a, b) {
    return a + b;
}
console.log(addTS(10, 20));
// 👉 REAL WORLD:
// calculator, API logic, business rules
// 👉 INTERVIEW QUESTION:
// Q: What is typed function in TypeScript?
// A: Function where parameters and return type are defined
// 2️⃣ FUNCTION WITH RETURN TYPE
function getName(name) {
    return "Hello " + name;
}
console.log(getName("Hassan"));
// 👉 JS vs TS
// JS: return type unknown
// TS: strict return type enforced
// 👉 INTERVIEW QUESTION:
// Q: Why return type is important?
// A: To ensure function always returns expected type
// 3️⃣ OPTIONAL PARAMETER
function greet(name, age) {
    return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
}
console.log(greet("Ali"));
console.log(greet("Ali", 25));
// 👉 REAL WORLD:
// user profile where age may or may not exist
// 👉 INTERVIEW QUESTION:
// Q: What is optional parameter?
// A: Parameter that may or may not be passed (? symbol)
// 4️⃣ DEFAULT PARAMETER
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5)); // 5 * 2 = 10
console.log(multiply(5, 3)); // 5 * 3 = 15
// 👉 REAL WORLD:
// default config values (pagination, settings)
// 👉 INTERVIEW QUESTION:
// Q: What is default parameter?
// A: Parameter with pre-defined value if not provided
// 5️⃣ OPTIONAL + DEFAULT COMPARISON
function buildMessage(name, role = "User", age) {
    return age
        ? `${name} is ${age} years old and role is ${role}`
        : `${name} role is ${role}`;
}
console.log(buildMessage("Hassan"));
console.log(buildMessage("Ali", "Admin"));
console.log(buildMessage("Zain", "Admin", 30));
// 👉 REAL WORLD:
// dynamic user profile generation
// 6️⃣ ARROW FUNCTION TYPING
const divide = (a, b) => {
    return a / b;
};
console.log(divide(10, 2));
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(10, 4));
// 👉 REAL WORLD:
// callback functions, event handlers
// 👉 INTERVIEW QUESTION:
// Q: Why function types are useful?
// A: To reuse function structure safely
// 8️⃣ REAL WORLD API STYLE FUNCTION
function createUser(name, isAdmin = false, age) {
    return {
        name,
        isAdmin,
        age: age ?? "Not provided",
    };
}
console.log(createUser("Hassan"));
console.log(createUser("Ali", true, 25));
// 👉 REAL WORLD:
// backend user creation API
// 👉 INTERVIEW QUESTION:
// Q: Why default + optional together?
// A: To handle flexible API inputs
// 🚀 END OF FILE
