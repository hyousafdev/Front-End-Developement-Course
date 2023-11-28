import React from 'react'
import ChildComponentB from './useContextHookB'

function ChildComponentA() {
  return (
    <div>
        <ChildComponentB />
    </div>
  )
}

export default ChildComponentA