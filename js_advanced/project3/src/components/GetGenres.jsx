import React from 'react'
import Select from 'react-select'
import axios from "axios"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import ShowMovies from './ShowMovies'
import TextField from "@material-ui/core/TextField"


require('dotenv').config()

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class GetGenres extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      genre: null,
      year: 2018
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

  _handleTextFieldChange = (event) => {
    this.setState({year: event.target.value})
  }
  render() {
    const { classes } = this.props;

    let showMovie
    if (this.state.genre && this.state.year) {
      showMovie = <ShowMovies genre={this.state.genre} year={this.state.year}/>
    }

    return (
        <div>
          <h1>Select a Genre and Year</h1>
          <Select
              value={this.state.genre}
              onChange={this.handleChange}
              options={this.state.genres}
              placeholder="Genre"
          />
          <form className={classes.container} noValidate autoComplete="off" onSubmit={event => event.preventDefault()}>
            <TextField
                id="filled-full-width"
                label="Year"
                style={{ margin: 8 }}
                placeholder="2018"
                fullWidth
                margin="normal"
                value={this.state.year}
                onChange={this._handleTextFieldChange}
                InputLabelProps={{
                  shrink: true
                }}
            />
          </form>
          {showMovie}
        </div>
    );
  }
}

GetGenres.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GetGenres);
