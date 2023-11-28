import React, {useState, useEffect} from 'react'
import axios from 'axios' //install axios to run this command: npm i axios
function DataFetching() {
    const[post, setPost] = useState({})
    const [id, setId] = useState(1)
    // set states for fetching data through button click
    const[idFromButtonClick, setIdFromButtonClick] = useState(1)
    // specify handleClick method to fetch individual id on button click
    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`) //passed idFromButtonClick state
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick]) // set idFromButtonClick state in the array
  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)} />
        {/* Here we just render the button and set function onClick={handleClick just for fetching posts by id} */}
        <button type='button' onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
        {/* <ul>
            {post.map(post => (
                <li key={post.id}> {post.title} </li>
            ))}
        </ul> */}
    </div>
  )
}
export default DataFetching