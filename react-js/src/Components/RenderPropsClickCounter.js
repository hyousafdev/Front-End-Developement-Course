import React, { Component } from 'react'
class RenderPropsClickCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return <button onClick={incrementCount}>Click {count} times</button>
    }
}
export default RenderPropsClickCounter;