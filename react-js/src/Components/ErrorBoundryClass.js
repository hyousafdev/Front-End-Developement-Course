import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }

    static getDerivedStateFromError(errorP) {
        return{
            hasError: true // hasError is a property
        }
    }

    componentDidCatch(errorP, infoP) {
        console.log(errorP)
        console.log(infoP)
    }
    
    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundary;