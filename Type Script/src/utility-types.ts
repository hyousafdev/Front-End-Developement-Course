// 🔥 UTILITY TYPES IN TYPESCRIPT (PARTIAL, REQUIRED, PICK, OMIT, RECORD)


// BASE TYPE (we will reuse this everywhere)


type User = {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean;
};


// 1️⃣ PARTIAL<T>


// makes all properties optional
type PartialUser = Partial<User>;

let updateUser: PartialUser = {
    name: "Hassan"
};

// 👉 REAL WORLD:
// update API (only send changed fields)

// 👉 INTERVIEW QUESTION:
// Q: What is Partial?
// A: Makes all properties optional


// 2️⃣ REQUIRED<T>


// makes all properties required
type RequiredUser = Required<User>;

let fullUser: RequiredUser = {
    id: 1,
    name: "Ali",
    email: "ali@test.com",
    isAdmin: false
};

// 👉 REAL WORLD:
// form validation (all fields must exist)

// 👉 INTERVIEW QUESTION:
// Q: What is Required?
// A: Makes all optional properties required


// 3️⃣ PICK<T, K>


// select only specific fields
type UserBasicInfo = Pick<User, "name" | "email">;

let basicUser: UserBasicInfo = {
    name: "Zain",
    email: "zain@test.com"
};

// 👉 REAL WORLD:
// sending limited data to frontend

// 👉 INTERVIEW QUESTION:
// Q: What is Pick?
// A: Select specific properties from a type


// 4️⃣ OMIT<T, K>


// remove specific fields
type UserWithoutId = Omit<User, "id">;

let newUser: UserWithoutId = {
    name: "Usman",
    email: "usman@test.com"
};

// 👉 REAL WORLD:
// creating new user (ID auto-generated)

// 👉 INTERVIEW QUESTION:
// Q: What is Omit?
// A: Remove specific properties from a type


// 5️⃣ RECORD<K, T>


// creates object with fixed keys and value types
type Roles = "admin" | "user" | "guest";

type RolePermissions = Record<Roles, boolean>;

let permissions: RolePermissions = {
    admin: true,
    user: false,
    guest: false
};

console.log(permissions);

// 👉 REAL WORLD:
// role-based access control (RBAC)

// 👉 INTERVIEW QUESTION:
// Q: What is Record?
// A: Creates object with keys and uniform value types


// 6️⃣ COMBINING UTILITY TYPES (ADVANCED)


// update user but without id
type UpdateUser = Partial<Omit<User, "id">>;

let userUpdate: UpdateUser = {
    email: "new@email.com"
};

// 👉 REAL WORLD:
// PATCH API endpoint


// 7️⃣ FUNCTION USING UTILITY TYPES


function updateUserData(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
}

let user1: User = {
    id: 1,
    name: "Hassan",
    email: "hassan@test.com"
};

let updated = updateUserData(user1, { name: "Ali" });

console.log(updated);

// 👉 REAL WORLD:
// merging updates safely


// 8️⃣ RECORD WITH NUMBER KEYS


type Scores = Record<number, string>;

let studentScores: Scores = {
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