// 🔥 GENERICS + GENERIC INTERFACES (ONE SHOT PRACTICE FILE)


// 1️⃣ WHY GENERICS?


function identityAny(value: any): any {
    return value;
}

// problem → no type safety
let result1 = identityAny(10);
let result2 = identityAny("Hello");

// 👉 GENERIC SOLUTION


function identity<T>(value: T): T {
    return value;
}

let num = identity<number>(100);
let str = identity<string>("TypeScript");

console.log(num, str);

// 👉 INTERVIEW QUESTION:
// Q: What is generics?
// A: Reusable components that work with different types


// 2️⃣ GENERIC FUNCTION (AUTO TYPE INFERENCE)


function getData<T>(data: T): T {
    return data;
}

// no need to manually pass type
let data1 = getData(123);
let data2 = getData("Hello");

console.log(data1, data2);

// 👉 REAL WORLD:
// API responses, reusable utilities


// 3️⃣ GENERIC WITH ARRAY


function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

let firstNum = getFirstElement([10, 20, 30]);
let firstStr = getFirstElement(["A", "B", "C"]);

console.log(firstNum, firstStr);

// 👉 INTERVIEW QUESTION:
// Q: Why generics with arrays?
// A: To maintain same type consistency


// 4️⃣ MULTIPLE GENERICS


function pair<K, V>(key: K, value: V) {
    return { key, value };
}

let p1 = pair<string, number>("age", 25);
let p2 = pair("name", "Hassan");

console.log(p1, p2);

// 👉 REAL WORLD:
// key-value mapping


// 5️⃣ GENERIC CONSTRAINT (VERY IMPORTANT)


function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

console.log(getLength("Hello"));
console.log(getLength([1, 2, 3]));

// console.log(getLength(123)); ❌ ERROR

// 👉 INTERVIEW QUESTION:
// Q: What is constraint in generics?
// A: Restricting types using extends


// 6️⃣ GENERIC INTERFACE (VERY IMPORTANT)


interface ApiResponse<T> {
    success: boolean;
    data: T;
}

// using interface with different types
let userResponse: ApiResponse<{ name: string; age: number }> = {
    success: true,
    data: {
        name: "Hassan",
        age: 22
    }
};

let productResponse: ApiResponse<{ id: number; price: number }> = {
    success: true,
    data: {
        id: 1,
        price: 500
    }
};

console.log(userResponse, productResponse);

// 👉 REAL WORLD:
// backend API responses


// 7️⃣ GENERIC TYPE ALIAS


type Box<T> = {
    value: T;
};

let numberBox: Box<number> = { value: 100 };
let stringBox: Box<string> = { value: "Hello" };

console.log(numberBox, stringBox);

// 👉 INTERVIEW QUESTION:
// Q: Generic interface vs type alias?
// A: Both support generics, usage depends on preference


// 8️⃣ GENERIC WITH FUNCTIONS IN INTERFACE


interface MathOperation<T> {
    (a: T, b: T): T;
}

const addNumbers: MathOperation<number> = (a, b) => a + b;
const joinStrings: MathOperation<string> = (a, b) => a + b;

console.log(addNumbers(10, 5));
console.log(joinStrings("Hello ", "World"));

// 👉 REAL WORLD:
// reusable logic functions


// 9️⃣ DEFAULT GENERIC TYPE


type DefaultType<T = string> = {
    value: T;
};

let defaultVal: DefaultType = { value: "Default String" };
let customVal: DefaultType<number> = { value: 123 };

console.log(defaultVal, customVal);

// 👉 INTERVIEW QUESTION:
// Q: What is default generic?
// A: Generic with default type if not provided


// 🔟 REAL WORLD EXAMPLE (API FETCH SIMULATION)


function fetchData<T>(data: T): ApiResponse<T> {
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