"use strict";
// 🔥 ARROW FUNCTIONS IN TYPESCRIPT (COMPLETE PRACTICE FILE)
// 1️⃣ BASIC ARROW FUNCTION (JS vs TS)
// JS arrow function (no type safety)
//const addJS = (a, b) => {
// return a + b;
//};
// TS arrow function (typed)
const addTS = (a, b) => {
    return a + b;
};
console.log(addTS(10, 20));
// 👉 INTERVIEW QUESTION:
// Q: What is arrow function in TypeScript?
// A: A shorter function syntax with type safety
// 2️⃣ ARROW FUNCTION WITH RETURN TYPE
const getMessage = (name) => {
    return `Hello ${name}`;
};
console.log(getMessage("Hassan"));
// 👉 REAL WORLD:
// greeting messages, API responses formatting
// 👉 INTERVIEW QUESTION:
// Q: Why return type is useful?
// A: Ensures function always returns expected type
// 3️⃣ ARROW FUNCTION WITH OPTIONAL PARAMETER
const greet = (name, age) => {
    return age
        ? `Hi ${name}, age ${age}`
        : `Hi ${name}`;
};
console.log(greet("Ali"));
console.log(greet("Ali", 25));
// 👉 REAL WORLD:
// user profiles where some fields may be missing
// 👉 INTERVIEW QUESTION:
// Q: What is optional parameter?
// A: Parameter that may or may not be passed (? symbol)
// 4️⃣ DEFAULT PARAMETER IN ARROW FUNCTION
const multiply = (a, b = 2) => {
    return a * b;
};
console.log(multiply(5)); // 10
console.log(multiply(5, 3)); // 15
// 👉 REAL WORLD:
// default settings (pagination, config values)
// 👉 INTERVIEW QUESTION:
// Q: What is default parameter?
// A: Predefined value used when argument is not passed
// 5️⃣ VOID RETURN ARROW FUNCTION
const logMessage = (message) => {
    console.log("Log:", message);
};
logMessage("TypeScript Arrow Function");
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(10, 5));
// 👉 REAL WORLD:
// reusable logic in services, callbacks
// 👉 INTERVIEW QUESTION:
// Q: Why function type alias?
// A: To enforce consistent function structure
// 7️⃣ REAL WORLD EXAMPLE (API STYLE)
const createUser = (name, isAdmin = false) => {
    return {
        name,
        isAdmin
    };
};
console.log(createUser("Hassan"));
console.log(createUser("Ali", true));
// 👉 REAL WORLD:
// backend user creation logic
// 👉 INTERVIEW QUESTION:
// Q: Why arrow functions used in APIs?
// A: Clean syntax + predictable behavior
// 8️⃣ THIS CONTEXT (IMPORTANT INTERVIEW TOPIC)
// JS problem example
const user = {
    name: "Hassan",
    regularFunction: function () {
        console.log("Regular:", this.name);
    },
    arrowFunction: () => {
        //console.log("Arrow:", this);
        console.log("Arrow:", "No this used"); // ✅ safe
    }
};
//Why arrow function is bad with this?
//👉 Answer:
//Arrow functions don’t have their own this, they inherit it from lexical scope, so they are unsafe for object methods.
user.regularFunction(); // works with correct this
user.arrowFunction(); // lexical this (important difference)
// 👉 INTERVIEW QUESTION:
// Q: Difference between arrow and normal function?
// A:
// - arrow function: no own this
// - normal function: has its own this
// 🚀 END OF FILE
