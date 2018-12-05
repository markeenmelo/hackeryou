import React from 'react'
import Select from 'react-select'
import axios from "axios"

require('dotenv').config()

class GetGenres extends React.Component {
  state = {
    genres: [],
    genre: null
  }

  componentDidMount() {
    axios
        .get(`${process.env.REACT_APP_API_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => this.setState({
          genres: res.data.genres.map(genre => Object.assign({}, {
            value: genre.id,
            label: genre.name
          }))
        }))
        .catch(err => err)
  }

  handleChange = (genre) => {
    this.setState({genre})
  }

  render() {
    return (
        <div>
          <Select
              value={this.state.genre}
              onChange={this.handleChange}
              options={this.state.genres}
          />
        </div>
    );
  }
}

export default GetGenres
