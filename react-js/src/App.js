// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Greet from './Components/functionalComponents';
import ClassComponent from './Components/classComponent';
import HelloJSX from './Components/helloJSX';
import Props from './Components/Props';

class App extends Component {
   render() {
    return (
      <div className="App">

      {/* <Greet /> */}
      {/* <ClassComponent /> */}
      {/* <HelloJSX /> */}
      <Props name='Smith' heroName='Batman'>
        <p>This is the children props</p>
        </Props>
        <Props name='Sara' heroName='Wonder woman'>
        <button>Action</button>
        </Props>
        <Props name='David' heroName='Superman'>
        <p>This is the another children props</p>
        </Props>

      </div>
    );
  }
}

export default App;
