// First import react
import React from 'react'

// Create const ES6 Arrow function
const HelloJSX = () => {

    // This is the JSX version of Hello Component
    /* return (
        <div>
            <h1>Hey, React this is from React JSX(JavaScript XML)</h1>
        </div>
    ) */

    // Now let's rewrite the component without using JSX
   // return react.createElement('div', null, 'This is React Component without using JSX and this from React Js Library and no tag included')

   // Now here we can included h1 tag
   return React.createElement(
       'div',
       // Adding objects on null, we cannot use class keyword because it's a reserved word we use className instead of class keyword in camelCasing
     //  { id='helloId', className='dummyClass' }, // go through error so comment this line
     null,
       React.createElement('h1', null,'This is React Component without using JSX and this from React Js Library included h1 tag')
       )

}

// Now Here we exporting default function name to App.js file
export default HelloJSX;