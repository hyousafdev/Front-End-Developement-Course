// Create a new Date object representing the current date and time
let currentDate = new Date();
console.log(currentDate);

// Create a Date object for a specific date and time (year, month, day, hour, minute, second)
let specificDate = new Date(2022, 0, 15, 12, 30, 0); // Note: Months are 0-indexed, so January is 0
console.log(specificDate);

//Getting Date Components
let year = currentDate.getFullYear();
let month = currentDate.getMonth(); // 0-indexed
let day = currentDate.getDate();
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();

console.log(`${year}-${month + 1}-${day} ${hour}:${minute}:${second}`);

//Formatting Date
let formattedDate = currentDate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC' // Set the desired time zone
});

console.log(formattedDate);

//Manipulating Date
// Add 5 days to the current date
currentDate.setDate(currentDate.getDate() + 5);
console.log(currentDate);

// Subtract 2 months from the specific date
specificDate.setMonth(specificDate.getMonth() - 2);
console.log(specificDate);

//Comparing Date
let date1 = new Date('2022-01-01');
let date2 = new Date('2022-01-15');

if (date1 > date2) {
    console.log('date1 is later than date2');
} else if (date1 < date2) {
    console.log('date1 is earlier than date2');
} else {
    console.log('Both dates are equal');
}

//Epoch time
let epochTime = Date.now();
console.log(epochTime);
