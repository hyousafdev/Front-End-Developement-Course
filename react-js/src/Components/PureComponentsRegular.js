import React, { Component } from 'react'
// Regular or Child Component
class RegularComp extends Component {
    render() {
        console.log('Regular Comp render')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComp;
