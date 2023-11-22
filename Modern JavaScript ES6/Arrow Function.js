/* Function Declaration and Function Definition
The main difference between Declaration and Definition in C is that declaration of a variable indicates the complier about the name and the type of the variable, while the Definition of a variable indicates the compiler where and how much storage to create for a variable. Function Declaration indicates what the function is and Function Definition what the function does. Wikipedia says a Declaration allocates memory and the Definition assigns a value to this allocated memory.*/




/*** Use Prettier plugin in VS Code for auto-correct and auto-formatting ***/
//concise code
//implicit return
//no 'this' binding

/* const squared = function(x) {
    return x * x;
}
console.log(squared(2)); */

//one line function implicit return we don't need to use return keyword. NOTE: For one parameter, paranthesis are optional. More than one parameter, paranthesis are mandatory.
//const squared = (x) => x * x;

/*** Problem: Given an array and a string and return an object. ***/
/*** map is an Array function that is used for "iteration" ***/
/*** NOTE: map, filter, reduce are excellent functions for Array iterations ***/
/* const courses = ['java', 'js', 'c', 'c++', 'python'];
const site = 'google'; */

/* const newArr = courses.map(function(course){
    return {course: `${course}`, site: `${site}`, year: 2022}
});
console.table(newArr); */

/*** Arrow Function Do The Same Thing. Implicit return keyword and paranthesis() as return both sides of object ***/
/* const newArr = courses.map(course => ({course: `${course}`, site: `${site}`}));
console.log(newArr); */

/*** Problem: Sort movies according to their ratings. Higher to lower ratings ***/
/*** Array has sort() that is used for strings and numbers. But it has to be overridden for objects. ***/
const movies = [
    {movie: "Movie A", ratings: 4.5},
    {movie: "Movie D", ratings: 3.5},
    {movie: "Movie G", ratings: 5.9},
    {movie: "Movie I", ratings: 4.7},
    {movie: "Movie L", ratings: 6.9}
];
/* const sortByRating = movies.sort(function(a, b){
    if(a.ratings > b.ratings) {
        return -1 //Descending Order
    } else {
        return 1 //Ascending Order
    }
});
console.table(sortByRating); */
/*** This is a standard way of overriding default sort() and using turnery operator over if else condition ***/
const sortByRating = movies.sort((a, b) => (a.ratings > b.ratings ? -1 : 1)); //(a.ratings > b.ratings) ? -1 : 1);
console.table(sortByRating);
//Just add two values through Arrow function or Fat Arrow function
const sum = (a, b) => a + b
console.log(sum(20,30))
