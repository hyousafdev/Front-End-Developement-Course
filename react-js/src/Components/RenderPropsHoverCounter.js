import React, { Component } from 'react'
class RenderPropsHoverCounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return <h2 onMouseOver={incrementCount}>Hover {count} times</h2>
    }
}
export default RenderPropsHoverCounter;