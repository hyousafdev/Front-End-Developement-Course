import React, { Component } from 'react'

// Child Component
class UpdatingLifecycleB extends Component {
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

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }
    
    render() {
        console.log('LifecycleB render')
        return <div> Lifecycle B </div>
        
    }
}

export default UpdatingLifecycleB;
