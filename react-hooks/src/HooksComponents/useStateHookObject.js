import React, { useState } from 'react'
function HookCounterThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <form>
                <input
                    type='text'
                    value={name.firstName}
                    /* So, here we used the spread operator which is the concept of ES6 ...name for firstName */
                    onChange={e => setName({ ...name, firstName: e.target.value })}
                />
                <input
                    type='text'
                    value={name.lastName}
                    /* So, here we used the spread operator which is the concept of ES6 ...name for lastName */
                    onChange={ev => setName({ ...name, lastName: ev.target.value })}
                />
                <h2>Your first name is: {name.firstName}</h2>
                <h2>Your last name is: {name.lastName}</h2>

                {/* stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string
                A JavaScript value, usually an object or array, to be converted.
                Converts a JavaScript value to a JavaScript Object Notation (JSON) string. */}
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}
export default HookCounterThree