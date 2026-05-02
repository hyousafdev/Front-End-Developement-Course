// 🔥 ENUMS IN TYPESCRIPT (COMPLETE PRACTICE FILE)


// 1️⃣ BASIC NUMERIC ENUM


// default numeric enum (auto increment)
enum Direction {
    Up,     // 0
    Down,   // 1
    Left,   // 2
    Right   // 3
}

let move: Direction = Direction.Up;

console.log(move); // 0

// 👉 INTERVIEW QUESTION:
// Q: What is enum?
// A: A way to define named constant values


// 2️⃣ CUSTOM NUMERIC ENUM


enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

let statusCodeValue: StatusCode = StatusCode.Success;

console.log(statusCodeValue); // 200

// 👉 REAL WORLD:
// HTTP status codes

// 👉 INTERVIEW QUESTION:
// Q: Can we assign custom values in enum?
// A: Yes


// 3️⃣ STRING ENUM (MOST USED)


enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

let userRole: Role = Role.Admin;

console.log(userRole); // "ADMIN"

// 👉 REAL WORLD:
// user roles, permissions, auth system

// 👉 INTERVIEW QUESTION:
// Q: Why string enum preferred?
// A: More readable and predictable


// 4️⃣ REVERSE MAPPING (ONLY IN NUMERIC ENUM)


enum Colors {
    Red,
    Green,
    Blue
}

console.log(Colors[0]); // "Red"

// 👉 NOTE:
// reverse mapping only works in numeric enums

// 👉 INTERVIEW QUESTION:
// Q: What is reverse mapping?
// A: Getting key from value in enum


// 5️⃣ ENUM IN FUNCTION


enum PaymentStatus {
    Pending = "PENDING",
    Completed = "COMPLETED",
    Failed = "FAILED"
}

function checkPayment(status: PaymentStatus) {
    if (status === PaymentStatus.Completed) {
        console.log("Payment Successful");
    } else if (status === PaymentStatus.Failed) {
        console.log("Payment Failed");
    } else {
        console.log("Payment Pending");
    }
}

checkPayment(PaymentStatus.Pending);

// 👉 REAL WORLD:
// payment systems, order tracking


// 6️⃣ ENUM VS STRING UNION (VERY IMPORTANT)


// enum approach
enum ThemeEnum {
    Light = "light",
    Dark = "dark"
}

// union approach (modern preferred)
type ThemeUnion = "light" | "dark";

let theme1: ThemeEnum = ThemeEnum.Dark;
let theme2: ThemeUnion = "light";

// 👉 DIFFERENCE:
// enum → extra JS code generated
// union → lightweight, no extra code

// 👉 INTERVIEW QUESTION:
// Q: Enum vs Union?
// A:
// - enum → structured constants
// - union → simpler and modern approach


// 7️⃣ REAL WORLD EXAMPLE


enum OrderStatus {
    Placed = "PLACED",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED"
}

type Order = {
    id: number;
    status: OrderStatus;
};

const order1: Order = {
    id: 101,
    status: OrderStatus.Shipped
};

console.log(order1);

// 👉 REAL WORLD:
// e-commerce order tracking system

// 👉 INTERVIEW QUESTION:
// Q: Why enums used in real apps?
// A: To manage fixed constant values safely


// 🚀 END OF FILE