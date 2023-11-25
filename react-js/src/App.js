// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Greet from './Components/functionalComponents';
import ClassComponent from './Components/classComponent';

class App extends Component {
   render() {
    return (
      <div className="App">

      {/* <Greet /> */}
      <ClassComponent />

      </div>
    );
  }
}

export default App;
