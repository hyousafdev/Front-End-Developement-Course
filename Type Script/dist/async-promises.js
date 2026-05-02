"use strict";
// 🔥 ASYNC / PROMISE TYPES IN TYPESCRIPT (ONE SHOT FILE)
// ======================================
// 1️⃣ BASIC PROMISE (JS vs TS)
// ======================================
// JS promise (no type safety)
function fetchDataJS() {
    return new Promise((resolve) => {
        resolve("Hello");
    });
}
// TS typed promise
function fetchDataTS() {
    return new Promise((resolve) => {
        resolve("Hello TypeScript");
    });
}
fetchDataTS().then((data) => {
    console.log(data);
});
// 👉 INTERVIEW QUESTION:
// Q: What is Promise<T>?
// A: A promise that resolves a specific type
// ======================================
// 2️⃣ ASYNC / AWAIT WITH TYPES
// ======================================
async function getMessage() {
    return "Hello Async TypeScript";
}
async function run() {
    const message = await getMessage();
    console.log(message);
}
run();
function getUser() {
    return new Promise((resolve) => {
        resolve({
            id: 1,
            name: "Hassan"
        });
    });
}
getUser().then((user) => {
    console.log(user.name);
});
// 👉 REAL WORLD:
// API response typing
// ======================================
// 4️⃣ ERROR HANDLING IN ASYNC
// ======================================
async function fetchDataWithError() {
    const success = true; // ✅ FIX: was `false`, which always threw an error
    if (!success) {
        throw new Error("Failed to fetch data");
    }
    return "Data loaded";
}
async function handle() {
    try {
        const data = await fetchDataWithError();
        console.log(data);
    }
    catch (error) {
        console.log("Error:", error);
    }
}
handle();
// 👉 INTERVIEW QUESTION:
// Q: How to handle async errors?
// A: try/catch block
// ======================================
// 5️⃣ PROMISE ALL (PARALLEL EXECUTION)
// ======================================
async function task1() {
    return "Task 1 done";
}
async function task2() {
    return "Task 2 done";
}
async function runAll() {
    const results = await Promise.all([task1(), task2()]);
    console.log(results);
}
runAll();
// 👉 REAL WORLD:
// multiple API calls in parallel
// ======================================
// 6️⃣ PROMISE RETURN NUMBER TYPE
// ======================================
function getNumber() {
    return Promise.resolve(100);
}
getNumber().then((num) => {
    console.log(num + 50);
});
// 👉 INTERVIEW QUESTION:
// Q: Can Promise return different types?
// A: Yes using Promise<T>
// ======================================
// 7️⃣ ASYNC FUNCTION WITH PARAMETER TYPES
// ======================================
async function greetUser(name) {
    return `Hello ${name}`;
}
greetUser("Ali").then(console.log);
async function fetchUser() {
    return {
        success: true,
        data: {
            id: 1,
            name: "Hassan"
        }
    };
}
fetchUser().then((res) => {
    console.log(res.data.name);
});
// 👉 REAL WORLD:
// backend API response wrapper
// ======================================
// 🧠 INTERVIEW QUESTIONS
// ======================================
// Q: What is Promise<T>?
// A: A promise that resolves a specific type
// Q: Why use async/await?
// A: Cleaner syntax for handling promises
// Q: Difference between sync and async?
// A:
// sync → blocking
// async → non-blocking
// 🚀 END OF FILE
