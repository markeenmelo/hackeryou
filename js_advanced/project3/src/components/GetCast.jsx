import React from 'react'
import Select from 'react-select'
import axios from "axios"

require('dotenv').config()

const getCast = query => {
  axios
      .get(`${process.env.REACT_APP_API_URL}search/person?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`)
      .then(res => this.setState({
        castOptions: res.data.results.map(cast => Object.assign({}, {
          value: cast.id,
          label: cast.name
        }))
      }))
      .catch(err => err)
}

export default class GetCast extends  React.Component {
  state = {
    cast: '',
    castOptions: []
  }

  handleChange = (cast) => {
    this.setState({crew: getCast(cast)})
  }

  render() {
    return (
        <Select
            // value={this.state.cast}
            // onChange={this.handleChange}
            options={this.state.castOptions}
        />
    );
  }
}
