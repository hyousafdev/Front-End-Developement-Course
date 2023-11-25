import React, { Component } from 'react'
class RenderPropsUser extends Component {
    render() {
        return ( //with this.props.render is perfectly valid
            <div>
                {this.props.render(true)}   {/* if true display Hassan otherwise display user not logged in */}
            </div>
        )
    }
}
export default RenderPropsUser;