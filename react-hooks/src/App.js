import React from 'react';
import './App.css';
import CustomCounterOne from './HooksComponents/CustomCounterOne';
import CustomCounterTwo from './HooksComponents/CustomCounterTwo';

function App() {
  return (
    <div className="App">
      <CustomCounterOne />
      <CustomCounterTwo />
    </div>
  );
}

export default App;
