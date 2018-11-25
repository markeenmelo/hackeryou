import React, {Component} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.refresh()
    }

    refresh = async () => {
        // 1. Make a GET request to '/posts'
        try {
            const res = await axios.get('/posts')
            console.log(res)
            // 2. If successful, store posts in state
            this.setState({
                posts: res.data.data
            })
        } catch (e) {
            // 3. If unsuccessful, log out the error
            console.log(e)
        }
    }

    render() {
        return (
            <div>
                <h2>Post Details</h2>
                <ul>
                    {this.state.posts.map(post => (
                        <li key={post._id}>
                            <Link to={`/posts/${post._id}`}>{post.title} - {post.user}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Posts
