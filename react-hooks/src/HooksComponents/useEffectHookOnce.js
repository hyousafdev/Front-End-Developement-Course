//with plain React js using Class Component
/* import React, { Component } from 'react'
class ClassMouse extends Component {
    // Here we set the state variable x and y
    constructor(props) {
      super(props)
      this.state = {
         x: 0,
         y: 0
      }
    }
    //Here we set or store the our variables x and y
    logMousePosition = e => {
        this.setState({ x: e.clientX, y: e.clientY })
    }
    //Here we add addEventListener
    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }
  render() {
    return (
      <div>
          X - {this.state.x} Y - {this.state.y}
      </div>
    )
  }
}
export default ClassMouse */

/**
 * With useEffect Hook
*/
import React, {useState, useEffect} from 'react';
function HookMouseOnce() {
    // state variable
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    //Here we define logMousePosition method and this is accepts an event as an argument
    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }
    //useEffect Hook accepts a function as an argument
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    }, []) // Here we put array ,[] or condition component not rendering subsequent like every time
  return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouseOnce