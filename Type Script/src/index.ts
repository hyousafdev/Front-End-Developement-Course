// TYPESCRIPT BASIC Data TYPES

// 1. NUMBER

// JS
let jsAge = 25; // dynamic type

// TS
let age: number = 25; // strictly number

// age = "25"; ❌ ERROR (TS catches bug early)

// Real use case:
let price: number = 999.99;

// 2. STRING

// JS
let jsName = "Hassan";

// TS
let userName: string = "Hassan";

// name = 123 ❌ ERROR

// Template string (real use)
let message: string = `Hello ${name}, price is ${price}`;

// 3. BOOLEAN

// JS
let isLoggedIn = true;

// TS
let isActive: boolean = true;

// isActive = "yes" ❌ ERROR

// Real use case
let isAdmin: boolean = false;

// 4. ARRAY

// JS
let jsNumbers = [1, 2, 3];

// TS - method 1
let numbers: number[] = [1, 2, 3];

// TS - method 2 (generic)
let names: Array<string> = ["Ali", "Ahmed"];

// numbers.push("4") ❌ ERROR

// Real use case:
let cartPrices: number[] = [100, 200, 300];

// 5. TUPLE (fixed length + types)

// Tuple = fixed structure

let user: [number, string] = [1, "Hassan"];

// user = ["Hassan", 1] ❌ ERROR (order matters)

// Real use case:
let apiResponse: [number, string] = [200, "Success"];

// 6. ENUM (named constants)

// Without enum (JS style)
let statusJS = "SUCCESS";

// TS Enum
enum Status {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  LOADING = "LOADING",
}

let currentStatus: Status = Status.SUCCESS;

// currentStatus = "DONE" ❌ ERROR

// Real use case:
if (currentStatus === Status.SUCCESS) {
  console.log("Data loaded successfully");
}

// 7. ANY (avoid if possible)

// JS
let jsData; // anything allowed

// TS
let data: any = 10;

data = "hello";
data = true;
data = [1, 2, 3];

// No type safety ❌
// Real use case:
// When you don't know API response structure

// BONUS: TYPE INFERENCE

// TS automatically detect type
let city = "Lahore"; // string inferred

// city = 123 ❌ ERROR

// ==============================
// FUNCTION EXAMPLE (REAL USE)
// ==============================

function calculateTotal(prices: number[]): number {
  // reduce array sum
  return prices.reduce((acc, curr) => acc + curr, 0);
}

console.log("Total:", calculateTotal(cartPrices));

// ==============================
// OUTPUT TEST
// ==============================

console.log("User:", user);
console.log("Status:", currentStatus);
console.log("Message:", message);