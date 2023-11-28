import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()  // create a intervalRef variable useRef Hook used Reference Hook
    //
    useEffect(() => {
        intervalRef.current = setInterval(() => { //setInterval is a callback function
        setTimer(prevTimer => prevTimer + 1)
    }, 1000)
    return () => {
        clearInterval(intervalRef.current) //use variable intervalRef
    };
}, [])
  return (
    <div>
        Hook Timer - {timer}
        {/*  */}
        <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
    </div>
  )
}

export default HookTimer