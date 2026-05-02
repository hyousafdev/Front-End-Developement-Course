// 🔥 INTERFACES + EXTENDING INTERFACES (TYPE SCRIPT PRACTICE FILE)


// 1️⃣ BASIC INTERFACE


// interface = blueprint of an object
interface User {
    name: string;
    age: number;
    isAdmin: boolean;
}

// creating object using interface
const user1: User = {
    name: "Hassan",
    age: 22,
    isAdmin: true
};

// function using interface
function printUser(user: User) {
    console.log(user.name, user.age, user.isAdmin);
}

printUser(user1);

// 👉 JS vs TS
// JS: no structure enforcement
// TS: interface enforces object shape

// 👉 INTERVIEW QUESTION:
// Q: What is interface?
// A: Blueprint that defines object structure


// 2️⃣ OPTIONAL PROPERTIES IN INTERFACE


interface Product {
    name: string;
    price: number;
    description?: string; // optional property
}

const product1: Product = {
    name: "Phone",
    price: 500
};

// 👉 REAL WORLD:
// API response where some fields may not exist

// 👉 INTERVIEW QUESTION:
// Q: What does ? mean in interface?
// A: Optional property (may or may not exist)


// 3️⃣ EXTENDING INTERFACES (VERY IMPORTANT)


interface Person {
    name: string;
    age: number;
}

// Employee extends Person (inherits all properties)
interface Employee extends Person {
    salary: number;
    department: string;
}

const emp1: Employee = {
    name: "Ali",
    age: 30,
    salary: 80000,
    department: "IT"
};

// 👉 REAL WORLD:
// Base user → extended as admin, employee, customer

// 👉 INTERVIEW QUESTION:
// Q: What is interface extension?
// A: Reusing and expanding existing interface


// 4️⃣ MULTIPLE INTERFACE EXTENSION


interface Address {
    city: string;
    country: string;
}

interface Contact {
    email: string;
    phone: string;
}

// multiple inheritance
interface Customer extends Person, Address, Contact {
    customerId: number;
}

const customer1: Customer = {
    name: "Zain",
    age: 28,
    city: "Lahore",
    country: "Pakistan",
    email: "zain@example.com",
    phone: "123456789",
    customerId: 101
};

// 👉 REAL WORLD:
// Full CRM system user model

// 👉 INTERVIEW QUESTION:
// Q: Can interface extend multiple interfaces?
// A: Yes, TypeScript supports multiple inheritance


// 5️⃣ FUNCTION INSIDE INTERFACE


interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}

const calc: Calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

console.log(calc.add(10, 5));
console.log(calc.subtract(10, 5));

// 👉 REAL WORLD:
// service layer APIs

// 👉 INTERVIEW QUESTION:
// Q: Can interface define functions?
// A: Yes, it can define function signatures


// 6️⃣ INTERFACE VS TYPE (IMPORTANT)


type CarType = {
    brand: string;
    model: string;
};

interface CarInterface {
    brand: string;
    model: string;
};

// 👉 DIFFERENCE:
// interface → best for objects & extensibility
// type → more flexible (union, function, etc.)

// 👉 INTERVIEW QUESTION:
// Q: Interface vs type?
// A: interface is extendable, type is more flexible


// 7️⃣ REAL WORLD EXAMPLE (API MODEL)


interface ApiResponse {
    success: boolean;
    message: string;
}

interface UserResponse extends ApiResponse {
    data: User;
}

const response: UserResponse = {
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