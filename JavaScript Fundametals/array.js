// Creating an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Creating an array of strings
let fruits = ['apple', 'banana', 'orange'];

// Creating an array of mixed data types
let mixedArray = [1, 'two', true, { key: 'value' }];


// Accessing elements by index
console.log(numbers[0]); // Outputs: 1
console.log(fruits[1]);  // Outputs: banana


// Modifying elements by index
fruits[1] = 'grape';
console.log(fruits); // Outputs: ['apple', 'grape', 'orange']

//Array Methods
fruits.push('kiwi');
console.log(fruits); // Outputs: ['apple', 'grape', 'orange', 'kiwi']

fruits.unshift('lemon');
console.log(fruits); // Outputs: ['lemon', 'apple', 'grape', 'orange', 'kiwi']

fruits.pop();
console.log(fruits); // Outputs: ['lemon', 'apple', 'grape', 'orange']

fruits.shift();
console.log(fruits); // Outputs: ['apple', 'grape', 'orange']

fruits.splice(1, 1); // Remove one element starting from index 1
console.log(fruits); // Outputs: ['apple', 'orange']

numbers.forEach(function(number) {
    console.log(number);
});
// Outputs:
// 1
// 2
// 3
// 4
// 5
