
//with class component without using useEffect Hook
/* import React, { Component } from 'react';
class ClassCounter extends Component {

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

      if(prevState.count !== this.state.count) {
        console.log('Updating document title');
    document.title = `Clicked ${this.state.count} times`;
      }

  }
    render() {
    return (
      <div>
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
      </div>
    )
  }
}
export default ClassCounter */

/**
 * Using useEffect Hook: this will make it very easier and simple
*/
import React, { useState, useEffect } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    //Note: When we specify useEffect Hook we are basically requesting the react the executing the function that is passed as an argument every time the component render. useEffect runs after every render
    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You Clicked ${count} times`;
    }, [count])
  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>

        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounter