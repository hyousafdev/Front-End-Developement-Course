//Template Literals
//Template Tagged

function bio(arr, ...arg) {
    console.log(arr);
    arg.map(function(text){
        console.log(text);
    });
    return arg;
}

const person = {
    name: 'Smith',
    company: 'ABC',
    course: 'Java',
    website: 'java.org',
    city: 'USA'
};
//Here is bio with template tagged
const greeting = bio`I'm ${person.name}. My company name is ${person.company}. I teach at ${person.course}. I work at ${person.website}. I live in ${person.city}`;
