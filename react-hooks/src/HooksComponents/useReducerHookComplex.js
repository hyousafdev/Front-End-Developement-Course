import React, {useReducer} from 'react'
// Here we set the state to object and through this pattern  we able to pass multiple  states in our object
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => { //passing two parameter
    switch(action.perform) { // and also here we used action as object
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
            // Here we set two more actions for the secondCounter and using spread operator
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}
function ReducerCounterTComplex() {
//passing any param like move or dispatch it's totally up to you
    const [count, move] = useReducer(reducer, initialState)
  return (
    <div>
        {/* rendering firstCounter and secondCounter */}
        <div>First Count - { count.firstCounter }</div>
        <div>Second Counter - { count.secondCounter }</div>
        <button onClick={() => move({ perform: 'increment', value: 1 })}>
            Increment
        </button>
        <button onClick={() => move({ perform: 'decrement', value: 1 })}>
            Decrement
        </button>
        {/* Here move increment and decrement by 5 */}
        <button onClick={() => move({ perform: 'increment', value: 5 })}>
            Increment 5
        </button>
        <button onClick={() => move({ perform: 'decrement', value: 5 })}>
            Decrement 5
        </button>
        {/* Here we move 2 more buttons for increment and decrement value starting from 10 */}
        <div>
        <button onClick={() => move({ perform: 'increment2', value: 1 })}>
            Increment Counter 2
        </button>
        <button onClick={() => move({ perform: 'decrement2', value: 1 })}>
            Decrement Counter 2
        </button>
        </div>
        <button onClick={() => move({perform: 'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerCounterTComplex