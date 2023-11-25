import React from 'react'
// key property is not working or accessible in the child component
function ListsAndKeysPerson({person}) {
    return (
        <div>
            <h2>
                I am {person.name}. I am {person.age} years old. I know {person.skill}
            </h2>
            
        </div>
    )
}

export default ListsAndKeysPerson;
