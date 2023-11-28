import {useState} from 'react' //Here we required the useState Hook this state not from the React Library

function useCounter(initialCount = 0, value) { // we set initialCount as an parameter and set with 0, and set second parameter as value
  const [count, setCount] = useState(initialCount) // passing here as an argument

  const increment = () => {
      setCount(prevCount => prevCount + value) // passing value as an argument rather than 1
  }

  const decrement = () => {
      setCount(prevCount => prevCount - value) // also here passing value as an argument rather than 1
  }

  const reset = () => {
      setCount(initialCount) // also here passing as an argument
  }
  // Array destructing: and doing this we can access the values and the methods using array destructuring in the Components like CounterOne and CounterTwo
  return [count, increment, decrement, reset]
}

export default useCounter