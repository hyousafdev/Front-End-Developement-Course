import React from 'react'

function Button({ handleClick, children }) {
    console.log('Rendering button - ', children);
  return (
    <button onClick={handleClick}>
        { children }
    </button>
  )
}
//Here we set the React.memo() for rendering only once
export default React.memo(Button)