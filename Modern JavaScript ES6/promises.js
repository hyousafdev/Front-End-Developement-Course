/**
 * Promises 3 stages
 * Pending
 * Resolve -> fulfilled
 * Reject
 * **/
// task
// API student
// 1: 2 second roll no
// 2: 2 second name and age
/**
 * Constructor Syntax
 * var promiseObj = new Promise(executor)
 * **/

/* executor */
// resolveFun(value) // call on fulfilled
// rejectFun(reason) // call on rejected
const promiseObj1 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let roll_no = [1, 2, 3, 4, 5]
        resolve(roll_no)
      // reject('Error while communicating')
    }, 2000)
})

const getBioData = (indexData) => { //index_data pass as parameter
    return new Promise( (resolve, reject) => {
        setTimeout( (indexData) => {
            let bioData = {
                name : 'Zain',
                age : 27
            }
            resolve(`My roll no is ${indexData}. My name is ${bioData.name} and I am ${bioData.age} years old.`)
        }, 2000, indexData)
    })
}

// ..promise consume
// we deal resolve with then method
promiseObj1.then( (rollNo) => { // rollNo accessing roll_no
    console.log(rollNo)
    return getBioData(rollNo[1])
    //we deal reject with catch method
}).then( (kuchbhi) => {
    console.log(kuchbhi)
}).catch( (er) => {
    console.log(er)
})
