import React, { Component } from 'react';

class State extends Component {
    // first step is to create the state object and initialize it and this step usually done inside the class constructor 
    constructor() {
        // within the constructor we called super method. this required because we extend react component class and call has to be may base class constructor
        super()
        // then we create our state object
        // Remember: inside a class the don't forget to use the this keyword
        this.state = {
            // state objects
            message: 'Welcome visitor',
            messageSubscribe: 'Please Subscribe us'
        }
    }
    // onClick() function change the message event Handler
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                    {/* Welcome visitor */}
                </h1>
                <h3> {this.state.messageSubscribe} </h3>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default State;