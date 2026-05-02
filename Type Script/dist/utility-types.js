"use strict";
// 🔥 UTILITY TYPES IN TYPESCRIPT (PARTIAL, REQUIRED, PICK, OMIT, RECORD)
let updateUser = {
    name: "Hassan"
};
let fullUser = {
    id: 1,
    name: "Ali",
    email: "ali@test.com",
    isAdmin: false
};
let basicUser = {
    name: "Zain",
    email: "zain@test.com"
};
let newUser = {
    name: "Usman",
    email: "usman@test.com"
};
let permissions = {
    admin: true,
    user: false,
    guest: false
};
console.log(permissions);
let userUpdate = {
    email: "new@email.com"
};
// 👉 REAL WORLD:
// PATCH API endpoint
// 7️⃣ FUNCTION USING UTILITY TYPES
function updateUserData(user, updates) {
    return { ...user, ...updates };
}
let user1 = {
    id: 1,
    name: "Hassan",
    email: "hassan@test.com"
};
let updated = updateUserData(user1, { name: "Ali" });
console.log(updated);
let studentScores = {
    1: "A",
    2: "B",
    3: "C"
};
console.log(studentScores);
// 👉 REAL WORLD:
// ID-based mapping
// 🧠 INTERVIEW QUESTIONS SUMMARY
// Q: Partial vs Required?
// A:
// Partial → all optional
// Required → all required
// Q: Pick vs Omit?
// A:
// Pick → select fields
// Omit → remove fields
// Q: Record?
// A: create object with fixed keys + same value type
// 🚀 END OF FILE
