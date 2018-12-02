import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


class Posts extends Component {
  state = {
    posts: []
  }

  refresh = async () => {
    const res = await axios.get('/posts')
    this.setState({ posts: res.data.data })

  }

  removePost = async id => {
    await axios.delete(`/posts/${id}`)
    this.refresh()
  }

  async componentDidMount () {
    this.refresh()
  }

  render() {
    return (
        <div>
          <h2>Posts</h2>
          <ul>
            {this.state.posts.map(post => (
                <li>
                  <Link to={`/posts/${post._id}`}>{post.title}</Link> - {post.user.name}
                  <button onClick={() => this.removePost(post._id)}>Delete Post</button>
                </li>
            ))}
          </ul>
        </div>
    )
  }
}

export default Posts
