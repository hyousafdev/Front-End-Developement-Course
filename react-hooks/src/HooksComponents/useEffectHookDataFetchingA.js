import React, { useState, useEffect } from 'react'
import axios from 'axios'
function DataFetchingA() {
    //Here we set the state variables using useState Hook
    const[post, setPost] = useState({})
    const [id, setId] = useState(3) //Access individual post through id to pass here as initial
    // Here we use useEffect for side effects
    useEffect(() => {
        // Here we just use the axios to fetch data and write the logic for anxios method like .then and .catch
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)  //mention id at the end of url after post like/posts/10
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])//Here we set the dependency array to call the API only once
  return (
    <div>
        {/* Here rendering the loading, post and error variables */}
        <input type='text' value={id} onChange={e => setId(e.target.value)} />
        <div>{post.title}</div>
    </div>
  )
}
export default DataFetchingA