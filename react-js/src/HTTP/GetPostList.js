import React, { Component } from 'react'
import axios from 'axios' // First step is import axios

class GetPostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],  // Second step create state based property and initialize with an array
            errorMsg: ''
        }
    }

    // Third step is create Lifecycle componentDidMount method which is best for get request
    // using axios you must be installed first axios module like npm i axios in the terminal
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts') // For errorMsg add any word or digit in the url or API
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })
    }
    
    render() {
        const {posts, errorMsg} = this.state // Destructuring
        return (
            <div>
                List of posts
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}> {post.title} </div>) :
                    null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

export default GetPostList
