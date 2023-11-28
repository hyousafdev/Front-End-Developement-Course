import React, { Component } from 'react'

class ClassTimer extends Component {
    // First set the instance field or a class property if want to call it to the interval timer
    interval
    constructor(props) {
      super(props)

      this.state = {
         timer: 0
      }
    }
    //create event
    componentDidMount() {
        //set interval field and create setInterval function have two argument first is callback function and inside the callback function we set the setState with parameter prevState  and with prevState set the timer
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }))
        }, 1000) // the second argument is the 1000 m/s
    }
    //create event and clearInterval function
    componentWillUnmount() {
        clearInterval(this.interval)
    }
  render() {
    return (
      <div>
          {/* rendering */}
          Class timer - {this.state.timer}
          <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
      </div>
    )
  }
}

export default ClassTimer