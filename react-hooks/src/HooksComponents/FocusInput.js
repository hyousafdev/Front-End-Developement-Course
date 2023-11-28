import React,{ useEffect, useRef } from 'react'

function FocusInput() {
    //set variable and Hook useRef and initialize with null
    const inputRef = useRef(null)
    // set useEffect Hook
    useEffect(() => {
        // focus the input element
        inputRef.current.focus()
    })
  return (
    <div>
        {/* set reference ref variable for focused input field */}
        <input ref={inputRef} text='text' />
    </div>
  )
}

export default FocusInput