//for loop
for (let i = 0; i < 5; i++) {
    // Code to be executed in each iteration
    console.log(i);
}

//while loop
let j = 0;

while (j < 5) {
    // Code to be executed in each iteration
    console.log(j);
    j++;
}

//do while loop
let k = 0;

do {
    // Code to be executed in each iteration
    console.log(k);
    k++;
} while (k < 5);

//for in loop
const person = {
    name: 'John',
    age: 30,
    job: 'Developer'
};

for (let key in person) {
    // Code to be executed for each property
    console.log(key, person[key]);
}

//for of loop
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    // Code to be executed for each element in the array
    console.log(color);
}

//forEach method
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    // Code to be executed for each element in the array
    console.log(number);
});
