import React from 'react';
import './App.css';
import ChildComponentA from './HooksComponents/useContextHookA';
//setup context for the consumer or child component in my case is ./HooksComponents/useContextHookA
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value = 'Hassan'>
        <ChannelContext.Provider value = 'Codex'>
        <ChildComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
