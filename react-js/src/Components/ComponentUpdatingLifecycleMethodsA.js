import React, { Component } from 'react'
import UpdatingLifecycleB from './ComponentUpdatingLifecycleMethodsB'

// Parent Component
class UpdatingLifecycleA extends Component {
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

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Component Updating Lifecycle Methods'
        })
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change state</button>
                <UpdatingLifecycleB/>
            </div>
        )
        // return <div> Lifecycle A </div>
        
    }
}

export default UpdatingLifecycleA;
