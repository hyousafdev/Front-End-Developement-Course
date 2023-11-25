import React, { Component } from 'react'
import PureComp from './PureComponents'
import RegularComp from './PureComponentsRegular'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'David'
        }
    }

    componentDidUpdate() {
        setInterval(() => {
            this.setState({
                name: 'David'
            })
        }, 2000)
    }
    
    render() {
        console.log('*************************** Parent Comp render ***************************')
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp;
