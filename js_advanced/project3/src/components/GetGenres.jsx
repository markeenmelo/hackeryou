import React from 'react'
import Select from 'react-select'
import axios from "axios"

import ShowMovies from './ShowMovies'

require('dotenv').config()

class GetGenres extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      genre: null
    }
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
    let showMovie
    if (this.state.genre) {
      showMovie = <ShowMovies genre={this.state.genre}/>
    }
    return (
        <div>
          <h1>Genre</h1>
          <Select
              value={this.state.genre}
              onChange={this.handleChange}
              options={this.state.genres}
          />
          {showMovie}
        </div>
    );
  }
}

export default GetGenres
