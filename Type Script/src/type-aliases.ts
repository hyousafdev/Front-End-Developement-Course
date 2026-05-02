/* // 🔥 TYPE ALIASES IN TYPESCRIPT (DETAILED PRACTICE FILE)

// 👉 Type Alias = custom name for a type (like shortcut / reusable type)


// 1️⃣ BASIC TYPE ALIAS


// creating a simple type alias
type UserName = string; // we created custom name for string

let name1: UserName = "Hassan"; // same as string but more readable

// 👉 JS vs TS
// JS: no type alias concept
// TS: reusable type naming for clarity


// 2️⃣ OBJECT TYPE ALIAS (MOST IMPORTANT)


type User = {
    name: string;
    age: number;
    isAdmin: boolean;
};

// using the alias
const user1: User = {
    name: "Ali",
    age: 25,
    isAdmin: true
};

// function using type alias
function printUser(user: User) {
    console.log(user.name, user.age, user.isAdmin);
}

printUser(user1);

// 👉 REAL WORLD USE:
// API response structure reuse

// 👉 INTERVIEW QUESTION:
// Q: Why use type alias for objects?
// A: To reuse structure and avoid repetition


// 3️⃣ UNION TYPE ALIAS (VERY IMPORTANT)


type ID = string | number; // ID can be string or number

let userId: ID = 101;
userId = "ABC123";

// function using union alias
function printId(id: ID) {
    console.log("User ID:", id);
}

printId(500);

// 👉 REAL WORLD:
// MongoDB ID or SQL ID can be string/number

// 👉 INTERVIEW QUESTION:
// Q: Why union inside type alias?
// A: To combine multiple possible types in reusable form


// 4️⃣ FUNCTION TYPE ALIAS


type MathOperation = (a: number, b: number) => number;

// function using alias
const add: MathOperation = (a, b) => {
    return a + b;
};

const multiply: MathOperation = (a, b) => {
    return a * b;
};

console.log(add(5, 10));
console.log(multiply(3, 4));

// 👉 REAL WORLD:
// callback functions, APIs, event handlers

// 👉 INTERVIEW QUESTION:
// Q: Why function type alias?
// A: To define reusable function signatures


// 5️⃣ OPTIONAL PROPERTIES IN TYPE ALIAS


type Product = {
    name: string;
    price: number;
    description?: string; // optional property
};

const product1: Product = {
    name: "Laptop",
    price: 1200
};

// description is optional so not required

// 👉 REAL WORLD:
// e-commerce products, forms

// 👉 INTERVIEW QUESTION:
// Q: What is optional property?
// A: Property that may or may not exist (? symbol)


// 6️⃣ TYPE ALIAS WITH ARRAYS


type StringArray = string[]; // alias for array of strings

let fruits: StringArray = ["Apple", "Banana", "Mango"];

// more complex array type
type NumberArray = number[];

let numbers: NumberArray = [1, 2, 3, 4];

// 👉 REAL WORLD:
// list of users, products, IDs

// 👉 INTERVIEW QUESTION:
// Q: Why use array type alias?
// A: To simplify repeated array type definitions


// 7️⃣ COMBINING TYPE ALIASES


type Address = {
    city: string;
    country: string;
};

type Employee = {
    name: string;
    salary: number;
    address: Address; // nested alias
};

const emp1: Employee = {
    name: "Zain",
    salary: 50000,
    address: {
        city: "Lahore",
        country: "Pakistan"
    }
};

// 👉 REAL WORLD:
// nested API responses

// 👉 INTERVIEW QUESTION:
// Q: Can type aliases be nested?
// A: Yes, very commonly used in real apps


// 8️⃣ TYPE ALIAS VS INTERFACE (IMPORTANT INTERVIEW TOPIC)

// Type Alias example
type Car = {
    brand: string;
    model: string;
};

// Interface example (for comparison)
interface Bike {
    brand: string;
    cc: number;
}

// 👉 DIFFERENCE:
// - type alias = flexible (union, function, etc.)
// - interface = mostly object structure

// 👉 INTERVIEW QUESTION:
// Q: Type alias vs interface?
// A: type is more flexible, interface is extendable for objects


// 🚀 END OF FILE */