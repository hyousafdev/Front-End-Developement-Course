// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Greet from './Components/functionalComponents';
import ClassComponent from './Components/classComponent';
import HelloJSX from './Components/helloJSX';

class App extends Component {
   render() {
    return (
      <div className="App">

      {/* <Greet /> */}
      {/* <ClassComponent /> */}
      <HelloJSX />

      </div>
    );
  }
}

export default App;
