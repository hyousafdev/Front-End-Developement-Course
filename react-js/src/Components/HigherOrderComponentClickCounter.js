import React, { Component } from 'react'
import withCounter from './HigherOrderComponentWithCounter'
class ClickCounter extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <button onClick={incrementCount}>
               {this.props.name} Click {count} times
            </button>
        )
    }
}
// Here we exported Higher Order Component(HOC) with passing in the ClickCounter
export default withCounter(ClickCounter, 5);
// export default ClickCounter;