import React from 'react';
import './App.css';
import ReducerCounter from './HooksComponents/useReducerHookSimple';
import ReducerCounterTComplex from './HooksComponents/useReducerHookComplex';
function App() {
  return (
    <div className="App">
      {/* <ReducerCounter /> */}
      <ReducerCounterTComplex />
    </div>
  );
}

export default App;
