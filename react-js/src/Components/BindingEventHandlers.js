import React, {Component} from 'react'

// Event handling through class component
class EventBind extends Component{
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        // third approach of bind the event handler. Binding in class constructor
        //this.clickHandler = this.clickHandler.bind(this)
    }
    /* clickHandler() {
        //setState method using for change the state
        this.setState({
            message: 'Goodbye!'
        })
        // this keyword is undefined with react js not working
        //console.log(this)
    } */

    // final approach to bind event arrow function, class property has arrow function
    // React document suggest approach no 3 and 4
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* first approach to binding the Event handler with render method. Binding in render */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* second approach to binding the Event handler with render method using arrow function in render */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* third approach of bind the event handler */}
                {/* <button onClick={this.clickHandler}>Click</button> */}

                {/* final Approach */}
                <button onClick={this.clickHandler}>Click</button> 
            </div>
        )
    }
}
export default EventBind;