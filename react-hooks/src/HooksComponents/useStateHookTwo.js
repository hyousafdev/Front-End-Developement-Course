import React, {useState} from 'react'

function HooksCounterTwo() {
    const initialCounter = 0
    const[count, setCount] = useState(initialCounter)

    const incrementFive = () => {
        for(let i = 0; i < 5; i++ ) {
           // setCount(count + 1) // with setCount the loop is not work just increment only one state
           setCount(prevCount => prevCount + 1) // with previous count or preCount run the loop and add 5 to previous state like 5 + 5 + 5 and so on
        }
    }
  return (
    <div>
        Count {count}
        <button onClick={() => setCount(initialCounter)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>

        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HooksCounterTwo
