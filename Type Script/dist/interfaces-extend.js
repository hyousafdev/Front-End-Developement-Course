"use strict";
// 🔥 INTERFACES + EXTENDING INTERFACES (TYPE SCRIPT PRACTICE FILE)
// creating object using interface
const user1 = {
    name: "Hassan",
    age: 22,
    isAdmin: true
};
// function using interface
function printUser(user) {
    console.log(user.name, user.age, user.isAdmin);
}
printUser(user1);
const product1 = {
    name: "Phone",
    price: 500
};
const emp1 = {
    name: "Ali",
    age: 30,
    salary: 80000,
    department: "IT"
};
const customer1 = {
    name: "Zain",
    age: 28,
    city: "Lahore",
    country: "Pakistan",
    email: "zain@example.com",
    phone: "123456789",
    customerId: 101
};
const calc = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};
console.log(calc.add(10, 5));
console.log(calc.subtract(10, 5));
;
const response = {
    success: true,
    message: "User fetched successfully",
    data: {
        name: "Hassan",
        age: 22,
        isAdmin: true
    }
};
// 👉 REAL WORLD:
// backend API response structure
// 👉 INTERVIEW QUESTION:
// Q: Why extend API interfaces?
// A: To reuse base response structure
// 🚀 END OF FILE
