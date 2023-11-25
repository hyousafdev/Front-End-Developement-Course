import React, { Component } from 'react'
// This is going to be our container Component and sharing code between two other Components
class RenderPropsCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
             count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevStateFun => {
            return {count: prevStateFun.count + 1}
        })
    }
    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.incrementCount)}
            </div>
        )
    }
}
export default RenderPropsCounter;