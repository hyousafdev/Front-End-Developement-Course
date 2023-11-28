import React, {useState, useEffect} from 'react'
import axios from 'axios' //install axios to run this command: npm i axios
function DataFetching() {
    const[post, setPost] = useState([])
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []) // set idFromButtonClick state in the array
  return (
    <div>
         <ul>
            {post.map(post => (
                <li key={post.id}> {post.title} </li>
            ))}
        </ul>
    </div>
  )
}
export default DataFetching