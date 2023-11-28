import React from 'react'
import useInput from './UserInput'

function UserForm() {
    /* const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('') */

    // set states or variables
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
    
    // set submit handler method
    const submitHandler = e => {
        e.preventDefault() //use event e.preventDefault to refresh the page any element
        alert(`Hello ${firstName} ${lastName}`)
        //define the parameters
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input type='text'
               {... bindFirstName} //spread operator
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                type='text'
                {... bindLastName} //spread operator
                />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm