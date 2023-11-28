//With Class Component
/* import React, { Component } from 'react'
export class IntervalClassCounter extends Component { // Here is we set Class component
    //constructor with one state variable count
    constructor(props) {
      super(props)
      this.state = {
         count: 0
      }
    }
    //Next we create to interval timer that is going to update the count value by 1. Please to create timer in componentDidMount so i have created an interval timer that runs every second in every second we execute the tick method
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }
    //timer will also avoid to clear the memory leaks 
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    // Here is tick method count value 1 at every second
    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return <h1> {this.state.count} </h1>
  }
}
export default IntervalClassCounter */

/**
 * with useEffect Hook
*/
import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const[count, setCount] = useState(0);
    const tick = () => {
        setCount(prevCount => prevCount + 1) //Here we use prevCount form to extract the prevCount count value to 1. For this we remove the count state from the below dependency array from the useEffect Hook, }, [])
    }
    // If we want to create a function and used in the useEffect Hook we can do it like this and call the function in the useEffect Hook
    /* function doSomething() {
        console.log(someProps);
    } */
    //
    useEffect(() => {
        // OR we can directly write the function in the Hook
        function doSomething() {
            console.log()
        }
        doSomething()
        const interval = setInterval(tick, 1000)
        // Here we clear the interval and add timer in subsequent way
        return () => {
            clearInterval(interval)
        }
    }, []) // in empty array we did not get the desired result the timer run only once then stop the count state so this is the incorrect dependency with useEffect Hook so we put count state or variable in the array to get our desired result we convert [] empty array to [count]
  return (
    <div>
        {count}
    </div>
  )
}
export default IntervalHookCounter