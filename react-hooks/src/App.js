import React from 'react';
import './App.css';
import ReducerCounter from './HooksComponents/useReducerHookSimple';
import ReducerCounterTComplex from './HooksComponents/useReducerHookComplex';
import ReducerCounterMultiple from './HooksComponents/useReducerHookMultiple';
function App() {
  return (
    <div className="App">
      {/* <ReducerCounter /> */}
      {/* <ReducerCounterTComplex /> */}
      <ReducerCounterMultiple />
    </div>
  );
}

export default App;
