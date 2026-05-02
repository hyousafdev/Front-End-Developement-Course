"use strict";
// 🔥 TYPE ALIASES IN TYPESCRIPT (DETAILED PRACTICE FILE)
let name1 = "Hassan"; // same as string but more readable
// using the alias
const user1 = {
    name: "Ali",
    age: 25,
    isAdmin: true
};
// function using type alias
function printUser(user) {
    console.log(user.name, user.age, user.isAdmin);
}
printUser(user1);
let userId = 101;
userId = "ABC123";
// function using union alias
function printId(id) {
    console.log("User ID:", id);
}
printId(500);
// function using alias
const add = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    return a * b;
};
console.log(add(5, 10));
console.log(multiply(3, 4));
const product1 = {
    name: "Laptop",
    price: 1200
};
let fruits = ["Apple", "Banana", "Mango"];
let numbers = [1, 2, 3, 4];
const emp1 = {
    name: "Zain",
    salary: 50000,
    address: {
        city: "Lahore",
        country: "Pakistan"
    }
};
// 👉 DIFFERENCE:
// - type alias = flexible (union, function, etc.)
// - interface = mostly object structure
// 👉 INTERVIEW QUESTION:
// Q: Type alias vs interface?
// A: type is more flexible, interface is extendable for objects
// 🚀 END OF FILE
