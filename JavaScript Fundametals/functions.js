// Function declaration
function greet(name) {
    console.log('Hello, ' + name + '!');
}

// Function call
greet('John'); // Outputs: Hello, John!


// Function expression
let greet = function(name) {
    console.log('Hello, ' + name + '!');
};

// Function call
greet('Jane'); // Outputs: Hello, Jane!


// Arrow function
let greet = (name) => {
    console.log(`Hello, ${name}!`);
};

// Function call
greet('Doe'); // Outputs: Hello, Doe!


// Function with parameters and return statement
function add(a, b) {
    return a + b;
}

let result = add(3, 5);
console.log(result); // Outputs: 8


// Function with default parameters
function greet(name = 'Guest') {
    console.log('Hello, ' + name + '!');
}

greet(); // Outputs: Hello, Guest!
greet('Alice'); // Outputs: Hello, Alice!


// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

let total = sum(1, 2, 3, 4, 5);
console.log(total); // Outputs: 15

/**
 * function scope
 * **/
function example() {
    let localVar = 'I am a local variable';
    console.log(localVar);
}
example(); // Outputs: I am a local variable
// console.log(localVar); // This would result in an error

/**
 * closure function
 * **/
function outer() {
    let outerVar = 'I am from outer';

    function inner() {
        console.log(outerVar);
    }

    return inner;
}
let closureFunction = outer();
closureFunction(); // Outputs: I am from outer

/**
 * callback function
 * **/
function doSomething(callback) {
    console.log('Doing something...');
    callback();
}
function callbackFunction() {
    console.log('Callback executed!');
}
doSomething(callbackFunction); // Outputs: Doing something... \n Callback executed!
