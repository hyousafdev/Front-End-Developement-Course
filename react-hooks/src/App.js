import React, { useReducer } from 'react';
import './App.css';
import ComponentA from './HooksComponents/useReducerHookCompA';
import ComponentB from './HooksComponents/useReducerHookCompB';
import ComponentBC from './HooksComponents/useReducerHookCompBC';

//Here we create or export the our CountContext variable to our child tree component like ComponentA,ComponentB, ComponentBC, ComponentD, ComponentDE and ComponentEF. CountContext from CountContext.Provider
export const CountContext = React.createContext()
//initialize state set by zero then create a reducer method and pass two param first is state and second is action what we perform
const initialState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
function App() {
  //create count and dispatch properties and pass these useReducer which accepts reducer method and initialState
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    //Here create provider which providing the values to the consumer child components or trees where are necessary and required
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
    <div className="App">
      <ComponentA />
      <ComponentB />
      <ComponentBC />
    </div>
    </CountContext.Provider>
  );
}

export default App;
