//async function
async function fetchData() {
    // Asynchronous code here
    return 'Data fetched!';
}

//await operator
async function fetchData() {
    // Simulate fetching data from an API
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data fetched!');
        }, 2000);
    });
}

async function getData() {
    // Use the await keyword to wait for the fetchData promise to resolve
    const result = await fetchData();
    console.log(result);
}
getData(); // Outputs: Data fetched!

//Handling Errors:
//You can use try/catch blocks to handle errors in asynchronous code.
async function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulate an error
        setTimeout(() => {
            reject('Error fetching data!');
        }, 2000);
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getData(); // Outputs: Error: Error fetching data!

//Parallel Asynchronous Operations:
//You can use Promise.all to run multiple asynchronous operations in parallel.
async function fetchData1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data from source 1');
        }, 2000);
    });
}

async function fetchData2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data from source 2');
        }, 1500);
    });
}

async function getAllData() {
    const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log(data1, data2);
}
getAllData(); // Outputs: Data from source 1 Data from source 2

//Using async/await with fetch:
//async/await is often used with the fetch API for making asynchronous HTTP requests.
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();
