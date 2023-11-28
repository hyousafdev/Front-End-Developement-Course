import React from 'react'

function Count({ text, count }) {
    console.log(`Rendering ${text}`)
  return <div> { text } - { count } </div>

}
//Here we set the React.memo() for rendering only once
export default React.memo(Count)