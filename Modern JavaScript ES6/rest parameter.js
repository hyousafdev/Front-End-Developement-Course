console.log('Welcome');
/* Rest Parameter: is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function. "The rest parameter syntax allows us to represent an indefinite number of arguments as an array" */

//ES5 Standard JavaScript
/* function sum(a,b,c,d,e,f) { //Defined function
    console.log(a + b + c + d + e + f)
}
//Declared or Called the function
sum(1,2,3,4,5,6); */

//ES6 Modern JavaScript Rest Parameter represent as an Array
/* function sum(...inputParams) {
    console.log(...inputParams); //only for values
    //console.log(inputParams); //with number of array
    //console.log(a + b + c + d + e + f)
}
sum(1,2,3,4,5,6); */

//sum of values with for of loop
/* function sum(...inputParams) {
    console.log(...inputParams)
    let total = 0;
    for(i of inputParams) {
        //total = total + i;
        //OR better than and best is
        total += i
        //console.log(total);
    }
    console.log(total);
}
sum(1,2,3,4,5,6); */

//Let's make use of the res parameter with some other arguments inside a function like, this
//rest with function and other argument
function fun(a, b, ...c) {
    console.log(`${a} ${b}`); //"Ronaldo" and "Neymar" stored in first two parameters a and b
    console.log(c); //pass rest parameter as an Array and console the total number of array after first wo arguments Ronaldo and Neymar
    console.log(c[0]); //console value of array which is at index of zero which is Pele
    console.log(c.length); //length of Array
    console.log(c.indexOf('Edan')); //index of Edan inside the array which is 2
}
fun("Ronaldo", "Neymar", "Pele", "Messi", "Edan");