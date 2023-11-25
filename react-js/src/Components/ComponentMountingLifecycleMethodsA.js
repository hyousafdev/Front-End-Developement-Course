import React, { Component } from 'react'
import LifecycleB from './ComponentMountingLifecycleMethodsB'

// Parent Component
class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'David'
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>Lifecycle A</div>
                <LifecycleB/>
            </div>
        )
        // return <div> Lifecycle A </div>
        
    }
}

export default LifecycleA;
