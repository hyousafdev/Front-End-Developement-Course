import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentEF() {
    //Here we set countContext property and set useContext Hook which accepts the argument CountContext which define in the '../App.js' File
    const countContext = useContext(CountContext)
  return (
    <div>
        {/* Here we just render the Counter values, countContext property define the above and countState define in the '../App.js' File */}
        Component EF - {countContext.countState}
        <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
        <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentEF