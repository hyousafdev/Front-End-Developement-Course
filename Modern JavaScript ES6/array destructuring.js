/*
The Destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
or properties from objects, into distinct variables
*/
console.log("Welcome")
const myProgLang = ['PHP', 'Java', 'JavaScript', 'Python']

//ES5 older javascript standard method
/*
var top1 = myProgLang[0]
var top2 = myProgLang[1]
var top3 = myProgLang[2]
console.log("My fav programming language is " + top1) */

//ES6 Modern JavaScript
/* let [arr1, arr2, arr3, arr4] = myProgLang;
console.log("My fav programming", arr1); */

/* console.log(myProgLang.length);
//using comas , , to skip bot two middle Array properties
let [arr1, , ,arr4] = myProgLang;
console.log(`First programming language in Array is ${arr1} and Last programming language is ${arr4}. `); */

let arr1, arr2
[arr1, arr2] = myProgLang
console.log(`First is ${arr1} and Second is ${arr2}`)