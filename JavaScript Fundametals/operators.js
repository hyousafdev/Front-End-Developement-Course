//Arithmetic Operators
let a = 5;
let b = 2;

console.log(a + b); // 7
console.log(a - b); // 3
console.log(a * b); // 10
console.log(a / b); // 2.5
console.log(a % b); // 1

//Assignment Operators
let x = 10;
x += 5; // equivalent to x = x + 5;

//Comparison Operators
let num1 = 5;
let num2 = '5';

console.log(num1 == num2);  // true (loose equality)
console.log(num1 === num2); // false (strict equality)

//Logical Operators
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // false (true only if both operands are true)
console.log(isTrue || isFalse); // true (true if at least one operand is true)
console.log(!isTrue); // false (inverts the value)

//Increment/Decrement Operators
let count = 10;

count++; // increment by 1
console.log(count); // 11

count--; // decrement by 1
console.log(count); // 10

//Concatenation Operator
let firstName = 'John';
let lastName = 'Doe';

let fullName = firstName + ' ' + lastName;
console.log(fullName); // 'John Doe'

//Conditional(Ternary) Operators
let age = 20;
let isAdult = age >= 18 ? 'Adult' : 'Minor';
console.log(isAdult); // 'Adult'
