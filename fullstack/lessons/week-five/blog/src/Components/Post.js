import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        post: null
    }
    getPost = async () => {
        const res = await axios.get(`/posts/${this.props.match.params.postId}`)
        console.log(res)
        this.setState({post: res.data.data[0]})
    }

    componentDidMount() {
        this.getPost()
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.post, null, 3)}
            </div>
        )
    }
}

export default Post
