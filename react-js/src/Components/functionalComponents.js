
// First we can import react from react
import React from 'react';

// Now we can create a simple functional components with name of Greet
function Greet()
{
     return <h1>Hey, this is from simple react functional components</h1>
}

/// Now we can this from java srcipt errow function ES6.
// in this situtaion we import the same name
// export const Greet = () => <h1>Hey, ReactJS this is from ES6 Errow Function</h1>

 // hum is ko wapis esy hi rehny dety in future is ko hum use kry gy muktalif jagho pr zrorat k mutabiq
 //const Greet = () => <h1>Hey, ReactJS this is from ES6 Errow Function</h1>

// Here we can export Greet function for App.js file for getting our out put.
// If we can comment this line we getting an error.
//./src/App.js Attempted import error: './Functional_Components/functionalComponents' does not contain a default export (imported as 'MyComponet').

// if we can working without writing this line we can write the function name into the App.js file where we can import the function or components name and we can write the keyword with the function name like jesa k uper likha gya ha.
export default Greet;