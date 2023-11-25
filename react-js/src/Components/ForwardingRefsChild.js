import React from 'react'

/* function FRInput() {
    return (
        <div>
            <input type='text' />
        </div>
    )
} */

// traditional function with an arrow function and arrow function pass as the parameter to React.forwardRef function
const FRInput = React.forwardRef( (props, refP) => {
    return (
        <div>
            <input type='text' ref={refP}/>
        </div>
    )
} )

export default FRInput
