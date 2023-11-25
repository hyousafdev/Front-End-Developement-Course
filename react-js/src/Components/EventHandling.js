import React, {Component} from 'react'

// Event handling through class component
class ClassEvent extends Component{
    clickHandler() {
        console.log('Clicked the button')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Clicked me</button>
            </div>
        )
    }
}
export default ClassEvent;

/* import React from 'react'
// Event handling through function component
function FunctionEvent() {
    function clickHandlerFun() {
        console.log('Button Clicked')
    }
    return(
        <div>
            <button onClick={clickHandlerFun}>Click</button>
        </div>
    )
}
export default FunctionEvent; */