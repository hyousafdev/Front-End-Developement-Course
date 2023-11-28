/* import React, { Component } from 'react'    //simple Class Component not using Hooks
class ClassCounter extends Component { // Here start our Class Component
    constructor(props) {    // initialize our state variable counter
      super(props)
      this.state = {
         count: 0 // state variable initialize to zero
      }
    }
    incrementCount = () => {    // method that is set able our state value
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return (
      <div>
          <button onClick={this.incrementCount}> Count {this.state.count} </button>
      </div>
    )
  }
}
export default ClassCounter; */

/**
 * Using useState Hook: this will make it very simple and easier
*/
// Here we are used useSate Hook with functional component
import React, { useState } from 'react';
function HooksCounter() {
    // Here we use Array Destructing rule which is in the ES6 JS
    //First Step, we set a state variable count and initialize with default value zero and default value is never used in the rerender which is inside the useState braces(0) and set a setCount function or method which is capable to changing the count variable
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Using useSate Hook</h1>
        {/* Second Step, we create a setState method or function and we call setCount and the passing in new count value and what is the new value count + 1 and since this function a becomes call that's converted in an arrow function*/}
        {/* Third Step the inner text Count {count} what we want to render or display*/}
        <button onClick={() => setCount(count + 1)}> Count {count} </button>
    </div>
  )
}

export default HooksCounter