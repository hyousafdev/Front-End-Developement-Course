"use strict";
// 🔥 ENUMS IN TYPESCRIPT (COMPLETE PRACTICE FILE)
// 1️⃣ BASIC NUMERIC ENUM
// default numeric enum (auto increment)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log(move); // 0
// 👉 INTERVIEW QUESTION:
// Q: What is enum?
// A: A way to define named constant values
// 2️⃣ CUSTOM NUMERIC ENUM
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
let statusCodeValue = StatusCode.Success;
console.log(statusCodeValue); // 200
// 👉 REAL WORLD:
// HTTP status codes
// 👉 INTERVIEW QUESTION:
// Q: Can we assign custom values in enum?
// A: Yes
// 3️⃣ STRING ENUM (MOST USED)
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
let userRole = Role.Admin;
console.log(userRole); // "ADMIN"
// 👉 REAL WORLD:
// user roles, permissions, auth system
// 👉 INTERVIEW QUESTION:
// Q: Why string enum preferred?
// A: More readable and predictable
// 4️⃣ REVERSE MAPPING (ONLY IN NUMERIC ENUM)
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
console.log(Colors[0]); // "Red"
// 👉 NOTE:
// reverse mapping only works in numeric enums
// 👉 INTERVIEW QUESTION:
// Q: What is reverse mapping?
// A: Getting key from value in enum
// 5️⃣ ENUM IN FUNCTION
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Pending"] = "PENDING";
    PaymentStatus["Completed"] = "COMPLETED";
    PaymentStatus["Failed"] = "FAILED";
})(PaymentStatus || (PaymentStatus = {}));
function checkPayment(status) {
    if (status === PaymentStatus.Completed) {
        console.log("Payment Successful");
    }
    else if (status === PaymentStatus.Failed) {
        console.log("Payment Failed");
    }
    else {
        console.log("Payment Pending");
    }
}
checkPayment(PaymentStatus.Pending);
// 👉 REAL WORLD:
// payment systems, order tracking
// 6️⃣ ENUM VS STRING UNION (VERY IMPORTANT)
// enum approach
var ThemeEnum;
(function (ThemeEnum) {
    ThemeEnum["Light"] = "light";
    ThemeEnum["Dark"] = "dark";
})(ThemeEnum || (ThemeEnum = {}));
let theme1 = ThemeEnum.Dark;
let theme2 = "light";
// 👉 DIFFERENCE:
// enum → extra JS code generated
// union → lightweight, no extra code
// 👉 INTERVIEW QUESTION:
// Q: Enum vs Union?
// A:
// - enum → structured constants
// - union → simpler and modern approach
// 7️⃣ REAL WORLD EXAMPLE
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "PLACED";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
const order1 = {
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
