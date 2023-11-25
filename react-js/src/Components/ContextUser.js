// First step is create the context using createContext method from React
import React from 'react'

const UserContext = React.createContext('React JS') // React JS set as the default value

// UserProvider function or Component Declared by us
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}

export default UserContext;