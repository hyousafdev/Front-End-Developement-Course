import React, { Component } from 'react'
import MemoComp from './Memo'

class MemoParentComp extends Component {

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
        console.log('*************************** Memo Parent Comp render ***************************')
        return (
            <div>
              Memo Parent Component
              <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default MemoParentComp;
