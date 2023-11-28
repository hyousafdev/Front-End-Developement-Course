import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
    //Here we set the variables using useStateHook
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)
    //Here we just set the incrementAge method
    const incrementAge = useCallback(() => { //using useCallback Hook to optimize our performance
        setAge( age + 1 )
    }, [age]) 
    //Here we set the incrementSalary method
    const incrementSalary = useCallback(() => {
        setSalary( salary + 1000 )
    }, [salary]) 
  return (
    <div>
        <Title />
        <Count text='Age' count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text='Salary' count={salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent