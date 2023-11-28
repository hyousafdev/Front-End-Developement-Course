import React from 'react'
import useCounter from './useCounter'

function CustomCounterOne() {
    //getting or import values and methods from useCounter Hook using Array Destructuring
    const [count, increment, decrement, reset] = useCounter(0, 1) //in CounterOne inside the useCounter Hook we set initial value is 0 and count 1 + 1 + 1
  return (
    <div>
        <h2>Count = {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomCounterOne