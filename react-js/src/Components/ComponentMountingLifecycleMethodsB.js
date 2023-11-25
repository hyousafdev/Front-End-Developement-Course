import React, { Component } from 'react'

// Child Component
class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'David'
        }
        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }
    
    render() {
        console.log('LifecycleB render')
        return <div> Lifecycle B </div>
        
    }
}

export default LifecycleB;
