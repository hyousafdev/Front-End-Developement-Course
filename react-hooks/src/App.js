import React from 'react';
import './App.css';
import ClassTimer from './HooksComponents/ClassTimer';
import HookTimer from './HooksComponents/HookTimer';


function App() {
  return (
    <div className="App">
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
