import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        // The first step is to creating the Ref
        this.inputRef = React.createRef()
        // Call back Refs
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        if(this.cbRef) {
            this.cbRef.focus()
        }

        /* this.inputRef.current.focus()
        console.log(this.inputRef) */
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                {/* The second step is to Attach our Ref method into the input element */}
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo;
