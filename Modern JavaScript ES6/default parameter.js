console.log("Welcome");
/* Default Function Parameters allow named parameters to be initialized with default values if no value or undefined is password.*/

//JavaScript standard method
/* function multiply(a, b) { // a, b are the function parameters
    console.log(a*b);
}
multiply(4); */ // 4 is the argument of a we not put the argument b so result is NaN not a number function multiply

/* function multiply(a, b) {
    //put the condition like turnery operator to solve the problem: b typeof b not equal to 'undefined' then console b otherwise after colon : any number like 4 is the second argument of b parameter
    b = (typeof b !== 'undefined') ? b : 4
    console.log(a*b);
}
multiply(6); */

//Now in ES6 Default Parameter b = any number or string or value
/* function multiply(a, b = 4) {
    console.log(a*b)
}
multiply(6) */

//with Fat Arrow function
const multiply = (a, b = 3, c = 4) => {
    console.log(`The Multiplication of three numbers is ${a * b * c}`);
}
multiply(5);