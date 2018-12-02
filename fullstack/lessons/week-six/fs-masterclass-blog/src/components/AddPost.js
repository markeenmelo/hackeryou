import React, { Component } from 'react'
import axios from 'axios'

class AddPost extends Component {
  state = {
    title: '',
    description: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const { title, description } = this.state
      const { user } = this.props
      axios.post('/posts', { title, description, user })
      this.props.history.push('/posts')
    } catch (e) {
      console.error(e)
    }

  }

  render() {
    return (
        <div>
          <h3>Add Post</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                  onChange={this.handleChange}
                  name="title"
                  type="text"
                  placeholder="Post title"
              />
            </div>
            <div>
            <textarea
                onChange={this.handleChange}
                name="description"
                placeholder="Post description"
            />
            </div>
            <input type='submit' value='Add Post' />
          </form>
        </div>
    )
  }
}

export default AddPost
