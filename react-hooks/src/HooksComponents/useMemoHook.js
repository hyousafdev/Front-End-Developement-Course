import React, { useState, useMemo } from 'react'

function MemoCounter() {
    //Hooks act like as functions and Here 0 is initial value, counterOne is current value of the state variable and setCounterOne is method that can update the state 
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    // set counter one
    const incrementOne = () => {
        setCounterOne( counterOne + 1 )
    }
    // set counter two
    const incrementTwo = () => {
        setCounterTwo( counterTwo + 1 )
    }
    /**
     useMemo and useCallback Hooks are pretty similar the difference between useMemo and useCallback. Use useCallback caches the provided instance itself whereas useMemo invokes the provided function and caches its result. So, if you need to catch a function use useCallback Hook and when you need to catch the result use useMemo Hook.And both these used with performance optimization with Hooks
    **/
    const isEven = useMemo(() => {
        let i = 0
        while(i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne]) //just use dependency on counterOne, counterOne delay few seconds whereas counterTwo increment imitedly
  return (
    <div>
        <div>
            <button onClick={incrementOne}>Count one - {counterOne}</button>
            <span> {isEven ? ' Even ' : ' Odd '} </span>
        </div>
        <div>
            <button onClick={incrementTwo}>Count two - {counterTwo}</button>
        </div>
    </div>
  )
}

export default MemoCounter