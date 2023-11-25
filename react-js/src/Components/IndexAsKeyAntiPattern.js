import React from 'react'

function IndexAsKey() {

    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const nameList = names.map((name, indexKey) => <h2 key={indexKey}>{indexKey} {name}</h2>)
    return (
        <div>
            { nameList }
        </div>
    )
}
export default IndexAsKey;