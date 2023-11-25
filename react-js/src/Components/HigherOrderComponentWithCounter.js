/******* This is HOC => Higher Order Component File ******/

import React from 'react'
// withCounter with camelCase is a function which accept the OriginalComponent 
const withCounter = (WrappedComponent, incrementNumber) => {

    // WithCounter with PascalCase is a Component maintains the state property
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                 count: 0
            }
        }
        incrementCount = () => {
            this.setState(prevStateFun => {
                return {count: prevStateFun.count + incrementNumber}
            })
        }
        render() {
            console.log(this.props.name)
            return <WrappedComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            // Spread Operator
            {... this.props}
            />
           // return <OriginalComponent name='Hassan'/>
        }
    }
    return WithCounter
}
export default withCounter;