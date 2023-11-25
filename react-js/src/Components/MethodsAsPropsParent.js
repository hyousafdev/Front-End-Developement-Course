import React, { Component } from 'react'
import ChildComponet from './MethodsAsPropsChild'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    // passing a parameter to a parent from the child
    // in the parent component define the method
    greetParent(childName) {
        // this is normal java script
        //alert('Hello' + this.state.parentName)

        // This is patix and this is early from ES6 JS
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                {/* <ChildComponet /> */}
                {/* on the child component tag pass the method as the props */}
                <ChildComponet greetHandler={this.greetParent} />
            </div>
        )
    }
}
export default ParentComponent;