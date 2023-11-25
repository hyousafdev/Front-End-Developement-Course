import React, { Component } from 'react'
import InputChild from './RefsWithClassComponents'
// Parent Component
class FocusInput extends Component {

    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <InputChild ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput;
