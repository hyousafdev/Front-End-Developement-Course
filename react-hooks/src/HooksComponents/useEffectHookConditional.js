import React, { useState, useEffect } from 'react'; //always set on top

//With Class Component
/* import React, { Component } from 'react';
class ClassCounterConditional extends Component {

constructor(props) {
  super(props)

  this.state = {
     count: 0,
     name: ''
  }
}

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
        //with condition the name state is not updating with every render
      if(prevState.count !== this.state.count) {
        console.log('Updating document title');
        document.title = `Clicked ${this.state.count} times`;
      }
      //this way of code is not optimal so we put condition on the above
      /* console.log('Updating document title');
      document.title = `Clicked ${this.state.count} times`; */

  //}
    //render() {
    //return (
      {/* <div>
          <input
          type='text'
          value={this.state.name}
          onChange={e => {
            this.setState({name: e.target.value})
          }
        }
          />
        <button onClick={() => this.setState({ count: this.state.count + 1})}>
            Click {this.state.count} times
        </button>
      </div> */}
    // )
  // }
// }
// export default ClassCounterConditional
/* Note: Every line will be uncomment before run the code */

/**
 * Same method but this time using useEffect Hook applying condition
*/
function HookCounterConditional() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title') //check if the input field updating
        document.title = `You Clicked ${count} times`;
    }, [count]) //Here we put condition in the useEffect Hook the name state not updating after every render
  return (
    <div>
        {/* this is not optimal when we write something in the input field the state updated so we put condition on the name state or input field */}
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>

        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterConditional