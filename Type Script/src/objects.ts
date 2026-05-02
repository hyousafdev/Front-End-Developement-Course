// 🔥 OBJECTS IN TYPESCRIPT (COMPLETE PRACTICE FILE)


// 1️⃣ BASIC OBJECT (JS vs TS)


// JS object (no type safety)
const userJS = {
    name: "Hassan",
    age: 22
};

// TS object (strict structure)
const userTS: { name: string; age: number } = {
    name: "Hassan",
    age: 22
};

console.log(userTS.name);

// 👉 INTERVIEW QUESTION:
// Q: Why TypeScript objects are better?
// A: They prevent wrong structure data at compile time


// 2️⃣ OBJECT TYPE ALIAS (BEST PRACTICE)


type User = {
    name: string;
    age: number;
    isAdmin: boolean;
};

const user1: User = {
    name: "Ali",
    age: 25,
    isAdmin: true
};

// 👉 REAL WORLD:
// API user model reuse

// 👉 INTERVIEW QUESTION:
// Q: Why use type alias for objects?
// A: To reuse structure and avoid repetition


// 3️⃣ OPTIONAL PROPERTIES


type Product = {
    name: string;
    price: number;
    description?: string; // optional
};

const product1: Product = {
    name: "Laptop",
    price: 1200
};

// 👉 REAL WORLD:
// API response missing fields

// 👉 INTERVIEW QUESTION:
// Q: What is optional property?
// A: Property that may or may not exist (? symbol)


// 4️⃣ READONLY PROPERTIES


type Car = {
    readonly brand: string;
    model: string;
};

const car1: Car = {
    brand: "Toyota",
    model: "Corolla"
};

// car1.brand = "Honda"; ❌ ERROR (readonly)

// 👉 REAL WORLD:
// IDs, constants, fixed values

// 👉 INTERVIEW QUESTION:
// Q: What is readonly?
// A: Property that cannot be changed after initialization


// 5️⃣ NESTED OBJECTS


type Address = {
    city: string;
    country: string;
};

type Employee = {
    name: string;
    address: Address;
};

const emp1: Employee = {
    name: "Zain",
    address: {
        city: "Lahore",
        country: "Pakistan"
    }
};

console.log(emp1.address.city);

// 👉 REAL WORLD:
// API nested response (user → address)

// 👉 INTERVIEW QUESTION:
// Q: Can objects be nested?
// A: Yes, very common in real applications


// 6️⃣ FUNCTION INSIDE OBJECT


type Calculator = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
};

const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

console.log(calc.add(10, 5));

// 👉 REAL WORLD:
// service logic inside object

// 👉 INTERVIEW QUESTION:
// Q: Can objects have functions?
// A: Yes, they are called methods


// 7️⃣ INDEX SIGNATURE OBJECT


type StringMap = {
    [key: string]: string;
};

const countryCodes: StringMap = {
    PK: "Pakistan",
    IN: "India",
    US: "United States"
};

// 👉 REAL WORLD:
// dynamic key-value API responses

// 👉 INTERVIEW QUESTION:
// Q: What is index signature?
// A: Allows dynamic keys in objects


// 8️⃣ OBJECT WITH UNION TYPES


type ID = string | number;

type UserWithID = {
    id: ID;
    name: string;
};

const user2: UserWithID = {
    id: 101,
    name: "Hassan"
};

// 👉 REAL WORLD:
// database IDs (MongoDB / SQL)

// 👉 INTERVIEW QUESTION:
// Q: Why union in object?
// A: To allow flexible data types


// 9️⃣ REAL WORLD API OBJECT EXAMPLE


type ApiResponse = {
    success: boolean;
    message: string;
    data: {
        userId: number;
        username: string;
    };
};

const response: ApiResponse = {
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