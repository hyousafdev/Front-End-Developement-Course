import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTitleOne() {
    const [count, setCount] = useState(0)
    // logic is same but this time is in different way of code using or importing here custom hook
    useDocumentTitle(count)
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleOne