"use strict";
// 🔥 READONLY IN TYPESCRIPT (ONE SHOT PRACTICE FILE)
const user1 = {
    id: 1,
    name: "Hassan"
};
user1.name = "Ali"; // ✅ allowed
// user1.id = 2; ❌ ERROR (readonly)
// 👉 INTERVIEW QUESTION:
// Q: What is readonly?
// A: Property that cannot be reassigned after initialization
// 2️⃣ READONLY VS CONST (IMPORTANT)
// const → variable cannot be reassigned
const obj = { name: "Hassan" };
obj.name = "Ali"; // ✅ allowed (object mutable)
const p = { name: "Hassan" };
// p.name = "Ali"; ❌ ERROR
// 👉 DIFFERENCE:
// const → locks variable
// readonly → locks property
// 3️⃣ READONLY IN CLASS
class Product {
    constructor(id, name) {
        this.id = id; // ✅ can assign here
        this.name = name;
    }
    updateName(newName) {
        this.name = newName;
        // this.id = 2; ❌ ERROR
    }
}
const prod = new Product(1, "Laptop");
prod.name = "Phone"; // ✅ allowed
// prod.id = 2; ❌ ERROR
// 👉 INTERVIEW QUESTION:
// Q: Where can readonly be assigned?
// A: At declaration or inside constructor
// 4️⃣ READONLY ARRAY
let numbers = [1, 2, 3];
// numbers.push(4); ❌ ERROR
// numbers[0] = 10; ❌ ERROR
console.log(numbers);
let items = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];
items[0].name = "Updated"; // ✅ allowed
// items[0].id = 10; ❌ ERROR
// 👉 REAL WORLD:
// database IDs should never change
// 6️⃣ READONLY WITH PARAMETER (IMMUTABLE FUNCTION)
function printUser(user) {
    // user.name = "Ali"; ❌ ERROR
    console.log(user);
}
printUser(user1);
const response = {
    success: true,
    message: "Data fetched"
};
// response.success = false; ❌ ERROR
console.log(response);
// 👉 REAL WORLD:
// API responses should not be modified
// 🧠 INTERVIEW QUESTIONS SUMMARY
// Q: readonly vs const?
// A:
// const → variable fixed
// readonly → property fixed
// Q: Can readonly be changed?
// A: No, only during initialization
// Q: Where used?
// A: APIs, IDs, configs
// 🚀 END OF FILE
