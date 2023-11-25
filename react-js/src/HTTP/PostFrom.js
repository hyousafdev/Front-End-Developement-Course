import React, { Component } from 'react'
import axios from 'axios' // For Post request

class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             // create state properties
             userId: '',
             title: '',
             body: ''
        }
    }

    changeHandler = eventArgument => {
        this.setState({ [eventArgument.target.name]: eventArgument.target.value })
    }
    submitHandler = submitArgument => {
        submitArgument.preventDefault()  // For avoiding page refreshing
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        // Destructuring state properties in the render method and assign the value attribute
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
