import React from 'react'

function ChildComponet(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

            {/* with arrow function and this time with () paranthese and passing one parameter which is child passed to parent */}
            {/* in the child component access the method using the props object if you pass a parameter you use the arrow function syntax */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}
export default ChildComponet;