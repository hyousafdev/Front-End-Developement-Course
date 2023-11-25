import React, { Component } from 'react'
import withCounter from './HigherOrderComponentWithCounter'
class HoverCounter extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <h2 onMouseOver={incrementCount}>
                Hovered {count} times
            </h2>
        )
    }
}
// Here we exported Higher Order Component(HOC) with passing in the HoverCounter
export default withCounter(HoverCounter, 10);
//export default HoverCounter;