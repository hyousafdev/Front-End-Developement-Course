"use strict";
// 🔥 GENERICS + GENERIC INTERFACES (ONE SHOT PRACTICE FILE)
// 1️⃣ WHY GENERICS?
function identityAny(value) {
    return value;
}
// problem → no type safety
let result1 = identityAny(10);
let result2 = identityAny("Hello");
// 👉 GENERIC SOLUTION
function identity(value) {
    return value;
}
let num = identity(100);
let str = identity("TypeScript");
console.log(num, str);
// 👉 INTERVIEW QUESTION:
// Q: What is generics?
// A: Reusable components that work with different types
// 2️⃣ GENERIC FUNCTION (AUTO TYPE INFERENCE)
function getData(data) {
    return data;
}
// no need to manually pass type
let data1 = getData(123);
let data2 = getData("Hello");
console.log(data1, data2);
// 👉 REAL WORLD:
// API responses, reusable utilities
// 3️⃣ GENERIC WITH ARRAY
function getFirstElement(arr) {
    return arr[0];
}
let firstNum = getFirstElement([10, 20, 30]);
let firstStr = getFirstElement(["A", "B", "C"]);
console.log(firstNum, firstStr);
// 👉 INTERVIEW QUESTION:
// Q: Why generics with arrays?
// A: To maintain same type consistency
// 4️⃣ MULTIPLE GENERICS
function pair(key, value) {
    return { key, value };
}
let p1 = pair("age", 25);
let p2 = pair("name", "Hassan");
console.log(p1, p2);
// 👉 REAL WORLD:
// key-value mapping
// 5️⃣ GENERIC CONSTRAINT (VERY IMPORTANT)
function getLength(item) {
    return item.length;
}
console.log(getLength("Hello"));
console.log(getLength([1, 2, 3]));
// using interface with different types
let userResponse = {
    success: true,
    data: {
        name: "Hassan",
        age: 22
    }
};
let productResponse = {
    success: true,
    data: {
        id: 1,
        price: 500
    }
};
console.log(userResponse, productResponse);
let numberBox = { value: 100 };
let stringBox = { value: "Hello" };
console.log(numberBox, stringBox);
const addNumbers = (a, b) => a + b;
const joinStrings = (a, b) => a + b;
console.log(addNumbers(10, 5));
console.log(joinStrings("Hello ", "World"));
let defaultVal = { value: "Default String" };
let customVal = { value: 123 };
console.log(defaultVal, customVal);
// 👉 INTERVIEW QUESTION:
// Q: What is default generic?
// A: Generic with default type if not provided
// 🔟 REAL WORLD EXAMPLE (API FETCH SIMULATION)
function fetchData(data) {
    return {
        success: true,
        data
    };
}
let userData = fetchData({ name: "Ali", age: 25 });
let numbersData = fetchData([1, 2, 3]);
console.log(userData, numbersData);
// 👉 REAL WORLD:
// reusable API handlers
// 🚀 END OF FILE
