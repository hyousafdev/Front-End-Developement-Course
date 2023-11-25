import React, { Component } from 'react'
class DestructuringClassComponents extends Component {
    render() {
        const { name, heroName } = this.props
        //const { state1, state2 } = this.state
        return (
            <h1>
                Welcome {name} a.k.a {heroName}
            </h1>
        )
    }
}
export default DestructuringClassComponents;




//Destructuring through functional components
/*import React from 'react';
const DestructuringPropsAndState = props => {
    const {name, heroName} = props
    return (

        <div>
            <h1>
                Hey, {name} a.k.a {heroName}
            </h1>
        </div>
    )
}

export default DestructuringPropsAndState; */