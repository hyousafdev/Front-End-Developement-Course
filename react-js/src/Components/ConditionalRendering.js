import React, { Component } from 'react'
class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
             // isLoggedIn: false
             isLoggedIn: true
        }
    }
    render() {

        // short circuit operator approach is better and read able
        // if condition is true David is logged in, otherwise David is logged out
        return this.state.isLoggedIn && <div> Welcome David, you are logged in: </div>

        /// if isLoggedIn true display Welcome David and if it is false display Welcome Guest(it is third approach)
        // ternary conditional operator approach, just for mating the code
        /* return this.state.isLoggedIn? (
            <div> Welcome David </div>
            ) : (
            <div> Welcome Guest </div>
        ) */

        // the second approach is creating java script element variables (elements stored in variable)
        // message is the element which stored to be render and hence this the element variable approach
        /* let message
        if (this.state.isLoggedIn) {
            message = <div> Welcome David </div>
        } else {
            message = <div> Welcome Guest </div>
        }
        return <div> { message } </div> */

        // if/else in the jsx or in render method is not valid approach (it is first approach not valid)
        /* if (this.state.isLoggedIn) {
            return (
                <div>
                    Welcome David
                </div>
            )

        } else {
            return <div> Welcome Guest </div>
        } */

        //Displaying or return simple message
        /* return (
            <div>
                <div> Welcome David</div>
                <div> Welcome Guest</div>
            </div>
        ) */
    }
}
export default UserGreeting;