// 🔥 READONLY IN TYPESCRIPT (ONE SHOT PRACTICE FILE)


// 1️⃣ BASIC READONLY PROPERTY (OBJECT)


type User = {
    readonly id: number; // cannot be changed
    name: string;
};

const user1: User = {
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

// readonly → property cannot be changed
type Person = {
    readonly name: string;
};

const p: Person = { name: "Hassan" };
// p.name = "Ali"; ❌ ERROR

// 👉 DIFFERENCE:
// const → locks variable
// readonly → locks property


// 3️⃣ READONLY IN CLASS


class Product {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id; // ✅ can assign here
        this.name = name;
    }

    updateName(newName: string) {
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


let numbers: readonly number[] = [1, 2, 3];

// numbers.push(4); ❌ ERROR
// numbers[0] = 10; ❌ ERROR

console.log(numbers);

// 👉 REAL WORLD:
// constant data lists


// 5️⃣ READONLY WITH OBJECT ARRAY


type Item = {
    readonly id: number;
    name: string;
};

let items: Item[] = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];

items[0].name = "Updated"; // ✅ allowed
// items[0].id = 10; ❌ ERROR

// 👉 REAL WORLD:
// database IDs should never change


// 6️⃣ READONLY WITH PARAMETER (IMMUTABLE FUNCTION)


function printUser(user: Readonly<User>) {
    // user.name = "Ali"; ❌ ERROR
    console.log(user);
}

printUser(user1);

// 👉 REAL WORLD:
// prevent accidental mutation in functions

// 👉 INTERVIEW QUESTION:
// Q: What is Readonly<T>?
// A: Utility type to make all properties readonly


// 7️⃣ REAL WORLD EXAMPLE (API RESPONSE)


type ApiResponse = {
    readonly success: boolean;
    readonly message: string;
};

const response: ApiResponse = {
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