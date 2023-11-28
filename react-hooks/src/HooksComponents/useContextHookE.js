import React, { useContext } from 'react'
/* import ComponentF from './ComponentF' */
//Step 1:-Here we import UserContext and ChannelContext from '../App'
import {UserContext, ChannelContext} from '../App'; //getting values from the provider
function ChildComponentE() {
    //Step 2:-Here we set two props or variables user and channel and assign = UserContext and ChannelContext inside the useContext Hook
    const user = useContext(UserContext) //stored in user and channel
    const channel = useContext(ChannelContext)
  return (
    <div>
        {/*Step 3:-Here we set render the user and channel props or variables */}
        {user} - {channel}
    </div>
  )
}

export default ChildComponentE