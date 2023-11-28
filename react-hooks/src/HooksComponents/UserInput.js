import {useState} from 'react'

function useInput(initialValue) {
    // set variables
    const [value, setValue] = useState(initialValue)
    // reset method
    const reset = () => {
        setValue(initialValue)
    }
    // bind method
    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }
    // Array Destructuring
    return [value, bind, reset]

}

export default useInput