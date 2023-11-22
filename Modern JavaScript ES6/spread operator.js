console.log('Welcome');
/*Spread Operator: allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in variable array where there is more than 1 values are expected. It allows us the privilege to obtain a list of parameters from an array. Syntax of Spread Operator is same as Rest Parameter but it works completely opposite of it.
*/

//ES5 Standard JavaScript Method bind() apply() call() methods
/* Addition of some values with apply() method */
/* function sum(a,b,c) {
    console.log(a+b+c);
}
var arrVal = [2,2,2];
sum.apply(null,arrVal); */ //first argument is null and second is arrVal

//ES6 Modern JavaScript
/* function sum(a, b, c){
    console.log(a + b + c);
}
var arrVal = [2, 3, 4];
//console.log(arrVal); //console it as an Array
console.log(...arrVal); // using spread operator console it as values
sum(...arrVal); */ //call the function

//with ES5 using concat() method
/* let arr1 = [1, 2, 3];
let arr2 = [4, 5, 7];
arr3 = arr1.concat(arr2);
console.log(arr3); */

//Replace concat() method
/* let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [7,8,9]
arr4 = [...arr1, ...arr2, ...arr3]
console.log(arr4); */

//Replace copy() and assign method
/* let arrCopy1 = [1,2,3]
let arrCopy2 = arrCopy1 //Array 1 assign to Array 2
arrCopy2.push(4,5) //push and add to numbers in Array 2
console.log(arrCopy1) // console Array 1
console.log(arrCopy2) */ // console Array 2

//with spread operator
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [...arr1, 4, 4, ...arr2, 6, 6] //4, 4 and 6, 6 push or add inside the Array items in Array variable arr3
console.log(arr1)
console.log(arr2)
console.log(arr3)