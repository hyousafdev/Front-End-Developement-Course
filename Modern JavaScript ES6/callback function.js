console.log('Welcome')
/**
 * "" Functions is First Class Citizens ""
 * 1: In JavaScript we can assign a function to a variable.
 * 2: Pass a function as an Argument == Callback Function
 * 3: Returning Function
 * "" Callback Function ""
 * Any function that is passed as an argument is called a Callback function.
 * A Callback function is a function that is to be executed after another function has finished executing --- hence the name Callback
 */
//normal function
/* const funA = () => {
    console.log('Welcome Function A')
}
const funB = () => {
    console.log('Welcome Function B')
}
funA()
funB() */

//normal function with setTimeout()
/* const funA = () => {
    //anonymous function
    setTimeout(function(){
        console.log('Function A')
    }, 3000)
}
const funB = () => {
    console.log('Function B')
}
funA()
funB() */
///OR///
/* const funA = () => {
    setTimeout(function(){
        console.log('Function A')
        funB()
    }, 3000)
}
const funB = () => {
    console.log('Function B')
}
funA() */

/** Why Callback Function?
 * JavaScript is an event driven language. This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events.
 * Callback Function are a way to make sure certain code doesn't execute until other code has already finished execution.
*/
//Standard JavaScript
/* const perOne = (friend) => {
    console.log(`I am busy right now. I am talking to ${friend}. I will call you back`)
}
const perTwo = () => {
    console.log(`Hey Whats'up. I call back you, you saw`)
}
perOne("Steve")
perTwo() */

//Callback Function
const perOne = (friend, callBackToFriend) => { //Add parameter callBackToFriend which is handle to perTwo as an Argument
    console.log(`I'm busy right now. I am talking to ${friend}. I'll call you back`)
    callBackToFriend() //call the parameter which Assign the argument perTwo function.Like: callBackToFriend = perTwo
}
const perTwo = () => {
    console.log(`Hey Whats'up. I call back you, you saw`)
}
perOne("Steve", perTwo) //pass the function perTwo as an Argument in perOne