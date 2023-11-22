console.log('Welcome');

/* const msg = {
    firstName: "Steve",
    lastName: "Smith",
    course: "ES6",
    interest: "Web",
    hobby: "Cricket",
    social: {
        twitter: "nothing",
        facebook: "forget it"
    }
} */

/*** Accessing object using ES5 (ES5 old version of java script) or normal and standard method ***/
/* const first_name = msg.firstName;
const last_name = msg.lastName;
const Course = msg.course;
const Twitter = msg.social.twitter;
console.log(first_name, last_name, Course, Twitter); */

/*Object_Destructuring: using same name variables or properties which we define above as object match it not using mismatch*/
/* const {firstName, lastName, course, social} = msg;
console.log(firstName, lastName, course, social.twitter, social.facebook); */


/**Another example with array which have two objects. And Actual use of Object Destructuring**/
const instructors = [
    { //Array child object with some variables or properties
        firstName: "Steve",
        lastName: "Smith",
        course: "ES6",
        interest: "Web",
        hobby: "Cricket",
        social: { //object child with two properties
            twitter: "nothing",
            facebook: "forget it"
        }
    },
    { //Another Array child with some variables or properties
        firstName: "Jhon",
        lastName: "Doe",
        course: "Python",
        interest: "App",
        hobby: "football",
        social: { //object child with two properties
            twitter: "@Doe",
            facebook: "JhonDoe"
        }
    },
    /*** Default Value: is used when value is undefined, object property is missing  ***/
    {
       //firstName: "", //Display as default value
        lastName: "",
        //course: "", //also here display default value
        interest: "",
        hobby: "",
        social: {
            twitter: "",
            facebook: ""
        }
    }
];
instructors.map(instructor => {
    /*** "MySelf" and "C++" are default values when nothing is assigned like empty string or object property than default values assigned by default. ***/
    const { firstName: first_name = 'MySelf', lastName, course = 'C++', social } = instructor;
    console.log(first_name, lastName, course, social.twitter, social.facebook);
});