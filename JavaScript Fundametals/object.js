// Creating an empty object
let person = {};

// Creating an object with properties
let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    isAutomatic: true,
    owners: ['John', 'Jane']
};

// Accessing properties using dot notation
console.log(car.brand); // Outputs: Toyota
console.log(car.year);  // Outputs: 2020

// Accessing properties using bracket notation
console.log(car['model']);  // Outputs: Camry

// Modifying properties
car.year = 2021;
car['owners'][0] = 'Alice';

console.log(car);
// Outputs:
// {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2021,
//     isAutomatic: true,
//     owners: ['Alice', 'Jane']
// }

// Adding new properties
car.color = 'blue';
car['mileage'] = 15000;

console.log(car);
// Outputs:
// {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2021,
//     isAutomatic: true,
//     owners: ['Alice', 'Jane'],
//     color: 'blue',
//     mileage: 15000
// }

//Nested Object
let student = {
    name: 'Bob',
    age: 20,
    contact: {
        email: 'bob@example.com',
        phone: '555-1234'
    }
};
console.log(student.contact.email); // Outputs: bob@example.com

//Methods
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3));      // Outputs: 8
console.log(calculator.subtract(10, 2)); // Outputs: 8

//Object Constructor
function Dog(name, age) {
    this.name = name;
    this.age = age;
}

let myDog = new Dog('Buddy', 3);
console.log(myDog.name); // Outputs: Buddy
console.log(myDog.age);  // Outputs: 3

//JSON (JavaScript Object Notation)
let jsonData = '{"name": "Alice", "age": 25, "city": "New York"}';
let parsedData = JSON.parse(jsonData);

console.log(parsedData.name); // Outputs: Alice
console.log(parsedData.age);  // Outputs: 25

let newJsonData = JSON.stringify(parsedData);
console.log(newJsonData); // Outputs: {"name":"Alice","age":25,"city":"New York"}
