import React from 'react';

const Props = props => {
    // We cannot assign the values directly like
   // props.name = 'John Doe'; // we are gettingTypeError: Cannot assign to read only property 'name' of object '#<Object>'
    console.log(props)
    return (
        // Wrap all the content or elements for using children props || property div tag is wrapper tag
        <div>
            <h1>
                Hey, {props.name} a.k.a {props.heroName}
            </h1>
            {/* This is for children paragraph */}
            {props.children}
        </div>
    )
}

export default Props;