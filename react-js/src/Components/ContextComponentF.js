import React, { Component } from 'react'
import { UserConsumer } from './ContextUser';
class ContextComponentF extends Component {
    render() {
        return (
            // Step three Consume the context value
            <UserConsumer>
                {
                    (usernamePara) => {
                        return <div>Hello { usernamePara } </div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ContextComponentF;