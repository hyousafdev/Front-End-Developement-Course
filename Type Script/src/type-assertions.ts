// 🔥 TYPE ASSERTIONS IN TYPESCRIPT (ONE SHOT PRACTICE FILE)


// 1️⃣ BASIC TYPE ASSERTION


// TypeScript thinks it can be multiple types
let value: unknown = "Hello TypeScript";

// assertion → tell TS it's string
let strLength: number = (value as string).length;

console.log(strLength);

// 👉 INTERVIEW QUESTION:
// Q: What is type assertion?
// A: Telling TypeScript the exact type of a value


// 2️⃣ DOM EXAMPLE (MOST COMMON)


// TS type: HTMLElement | null
let appDiv = document.getElementById("app") as HTMLElement;

// safe usage check
if (appDiv) {
    appDiv.innerText = "Hello World";
}

// 👉 REAL WORLD:
// accessing DOM elements safely


// 3️⃣ NON-NULL ASSERTION (!)


// tells TS value is NOT null
let appDiv2 = document.getElementById("app")!;

appDiv2.innerText = "Non-null assertion used";

// 👉 WARNING:
// will crash if element not found

// 👉 INTERVIEW QUESTION:
// Q: What is ! in TypeScript?
// A: Non-null assertion operator


// 4️⃣ TYPE ASSERTION WITH INPUT ELEMENT


let input = document.getElementById("username") as HTMLInputElement;

if (input) {
    console.log(input.value); // specific property
}

// 👉 REAL WORLD:
// form handling


// 5️⃣ TYPE ASSERTION WITH API RESPONSE


type ApiResponse = {
    name: string;
    age: number;
};

// unknown data from API
let data: unknown = {
    name: "Hassan",
    age: 22
};

// asserting correct type
let user = data as ApiResponse;

console.log(user.name);

// 👉 INTERVIEW QUESTION:
// Q: Is this safe?
// A: No, TS trusts you blindly


// 6️⃣ DOUBLE ASSERTION (ADVANCED, RARE)


// forcing type (unsafe)
let num = "123" as unknown as number;

console.log(num);

// 👉 WARNING:
// very unsafe, avoid in real projects


// 7️⃣ "as" VS "<>" SYNTAX


// modern syntax (recommended)
let el1 = document.getElementById("app") as HTMLElement;

// old syntax (avoid in React/TSX)
let el2 = <HTMLElement>document.getElementById("app");

// 👉 INTERVIEW QUESTION:
// Q: Which syntax should we use?
// A: "as" (safe with JSX)


// 8️⃣ TYPE ASSERTION VS TYPE CASTING


let val: unknown = "100";

// assertion (no runtime change)
let numVal = val as string;

// JS casting (actual conversion)
let converted = Number(val);

console.log(numVal, converted);

// 👉 INTERVIEW QUESTION:
// Q: Assertion vs casting?
// A:
// assertion → compile-time only
// casting → runtime conversion


// 9️⃣ BETTER APPROACH (TYPE NARROWING)


// instead of assertion
let data2: unknown = "Hello";

if (typeof data2 === "string") {
    console.log(data2.toUpperCase()); // safe
}

// 👉 BEST PRACTICE:
// prefer narrowing over assertion


// 🔟 REAL WORLD FUNCTION EXAMPLE


function getLength(input: unknown): number {
    // safe check
    if (typeof input === "string") {
        return input.length;
    }

    return 0;
}

console.log(getLength("TypeScript"));

// 👉 REAL WORLD:
// handling dynamic data safely


// 🚀 END OF FILE