import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {
    state = {
        user: null
    }
    getUser = async () => {
        const res = await axios.get(`/users/${this.props.match.params.userId}`)
        this.setState({user: res.data.data[0]})
    }

    componentDidMount() {
        this.getUser()
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.user, user, 3)}
            </div>
        )
    }
}

export default Profile
