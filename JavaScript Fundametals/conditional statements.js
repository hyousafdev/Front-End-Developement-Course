var condition1 = true;

if (condition1) {
    // Code to be executed if the condition1 is true
    console.log('true')
}


var condition2 = false;

if (condition2) {
    // Code to be executed if the condition2 is true
    console.log(true)
} else {
    // Code to be executed if the condition2 is false
    console.log('false')
}


var condition3 = false;
var condition4 = true;

if (condition3) {
    // Code to be executed if condition3 is true
    console.log('True if condition3 is true')
} else if (condition4) {
    // Code to be executed if condition4 is true
    console.log('True if condition4 is true')
} else {
    // Code to be executed if none of the conditions are true
    console.log('otherwise false')
}


var day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('It\'s the start of the week');
        break;
    case 'Friday':
        console.log('It\'s almost the weekend');
        break;
    default:
        console.log('It\'s a regular day');
}
