import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault() // not refresh the page
    }
    
    render() {
        // Destructuring
        const {username, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                    type="text"
                    value={username} /* Destructuring */
                    /* value={this.state.username} */
                    onChange={this.handleUserNameChange}
                    />
                </div>

                <div>
                    <label>Comments</label>
                    <textarea
                    value={comments} /* Destructuring */
                    /* value={this.state.comments} */
                    onChange={this.handleCommentsChange}
                    />
                </div>

                <div>
                    <label>Topic</label>                    {/* Destructuring */}
                    <select /* value={this.state.topic} */ value={topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
export default Form;