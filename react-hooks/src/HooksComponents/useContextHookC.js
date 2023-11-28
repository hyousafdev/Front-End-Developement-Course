import React from 'react'

import { UserContext, ChannelContext } from '../App'
function ChildComponentC() {
  return (
      /*Step 3 we consume the values using render props method */
    <div>
        <UserContext.Consumer>
            { user => {
                   return (
                       <ChannelContext.Consumer>
                           {
                               channel => {
                                return (
                                    <div>
                                        User context value {user}, channel context value {channel}
                                    </div>
                                )
                               }
                           }
                       </ChannelContext.Consumer>
                   )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ChildComponentC