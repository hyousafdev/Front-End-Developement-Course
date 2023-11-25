import React, { Component } from 'react'
import ContextComponentF from './ContextComponentF'
import UserContext from './ContextUser';
class ContextComponentE extends Component {

    static contextType = UserContext
    render() {
        return (
            <div>
                Component E context {this.context}
                < ContextComponentF />
            </div>
        )
    }
}

// ContextComponentE.contextType = UserContext

export default ContextComponentE;