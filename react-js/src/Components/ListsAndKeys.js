import React from 'react'
import ListsAndKeysPerson from './ListsAndKeysPerson'

function NameListsAndKeys() {

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'react'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    // Adding key property key prop is not accessible in child component as ListsAndKeysPerson
    const personList = persons.map( person=> <ListsAndKeysPerson key = {person.name} person={person} /> )

    /* const personList = persons.map(person => <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>) */

    //const names = ['Bruce', 'Clark', 'Diana']
    //const nameList = names.map(name => <h2> {name} </h2>)
    return (
        <div>



            { personList }

            { /* nameList */ }

            {
               /*  names.map(name => <h2> {name} </h2>) */
            }

            {/* <h2> {names[0]} </h2>
            <h2> {names[1]} </h2>
            <h2> {names[2]} </h2> */}
        </div>
    )
}

export default NameListsAndKeys;
