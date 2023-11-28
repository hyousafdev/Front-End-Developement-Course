import React from 'react'
import useCounter from './useCounter'
//The code and logic is same but the code is duplicate copy from CustomCounterTwo.js File
//The solution is useCustom Hooks to avoiding the duplication
function CustomCounterTwo() {
    //getting or import values and methods from useCounter Hook using Array Destructuring
    const [count, increment, decrement, reset] = useCounter(10, 10) //in CounterOne inside the useCounter Hook we set initial value is 10 and count 10 + 10 + 10
  return (
    <div>
        <h2>Count = {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomCounterTwo