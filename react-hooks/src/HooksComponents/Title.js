import React from 'react'

function Title() {
    console.log('Rendering title')
  return (
    <div>
        <h2>
            useCallback Hook
        </h2>
    </div>
  )
}
//Here we set the React.memo() for rendering only once
export default React.memo(Title)