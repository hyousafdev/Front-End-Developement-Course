import React, {useReducer} from 'react' // step 1, we start useReducer import in react
// Here the initialState is the numeric value is set to zero which is the count value
const initialState = 0
const reducer = (state, action) => { // the reducer function accepts the state and the current action and return the new state depending on the action
    //return newState, the action is increment return the state value is + 1, and same as decrement - 1 and initialState reset the state set to 0
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state -1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function ReducerCounter() {
    //just like the other Hooks useReducer is a function so we have to call it in our functional component.useReducer accepts two argument the first one is the reducer function and the second is initialState step 2, after step one we call useReducer and passing in reducer and initialState, back to useReducer we return pair of values like count and dispatch. the current value of the state which is count value and dispatch method which is capable of accepting an action to execute  the code specify in the render function
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Count - {count}</div>
        {/* used dispatch method to dispatch the appriate action based on what button  */}
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ReducerCounter