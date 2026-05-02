"use strict";
// 🔥 OBJECTS IN TYPESCRIPT (COMPLETE PRACTICE FILE)
// 1️⃣ BASIC OBJECT (JS vs TS)
// JS object (no type safety)
const userJS = {
    name: "Hassan",
    age: 22
};
// TS object (strict structure)
const userTS = {
    name: "Hassan",
    age: 22
};
console.log(userTS.name);
const user1 = {
    name: "Ali",
    age: 25,
    isAdmin: true
};
const product1 = {
    name: "Laptop",
    price: 1200
};
const car1 = {
    brand: "Toyota",
    model: "Corolla"
};
const emp1 = {
    name: "Zain",
    address: {
        city: "Lahore",
        country: "Pakistan"
    }
};
console.log(emp1.address.city);
const calc = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};
console.log(calc.add(10, 5));
const countryCodes = {
    PK: "Pakistan",
    IN: "India",
    US: "United States"
};
const user2 = {
    id: 101,
    name: "Hassan"
};
const response = {
    success: true,
    message: "Data fetched successfully",
    data: {
        userId: 1,
        username: "Hassan"
    }
};
// 👉 REAL WORLD:
// backend API response structure
// 👉 INTERVIEW QUESTION:
// Q: Why object typing is important in APIs?
// A: It ensures consistent response structure
// 🚀 END OF FILE
