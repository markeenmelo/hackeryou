import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import axios from "axios"

const styles = theme => ({
  card: {
    maxWidth: 310,
  },
  media: {
    height: 0,
    paddingTop: '150%', // 16:9
  },
  actions: {
    display: 'flex',
  }
})

class ShowMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    axios
        .get(`${process.env.REACT_APP_API_URL}discover/movie?with_genres=${this.props.genre.value}&adult=false&primary_release_year=${this.props.year}&media_type=movie&vote_count.gte=0&list_style=1&sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => this.setState({movies: res.data.results}))
        .catch(err => err)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.genre.value !== this.props.genre.value || prevProps.year !== this.props.year) {
      axios
          .get(`${process.env.REACT_APP_API_URL}discover/movie?with_genres=${this.props.genre.value}&adult=false&primary_release_year=${this.props.year}&media_type=movie&vote_count.gte=0&list_style=1&sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`)
          .then(res => this.setState({movies: res.data.results}))
          .catch(err => err)
    }
  }

  render() {
    const {classes} = this.props;

    let listMovies = this.state.movies.map(movie => {
      return (
          <Card
              className={classes.card}
              key={movie.id}
          >
            <CardHeader
                title={movie.original_title}
                subheader={movie.title}
            />
            <CardMedia
                className={classes.media}
                image={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <CardContent>
              <Typography component="p">
                <strong>Year Released:</strong> <p>{movie.release_date}</p>
                <strong>Rate:</strong> <p>{movie.vote_average} / 10</p>
                <strong>Synopses:</strong> <p>{movie.overview}</p>
              </Typography>
            </CardContent>
          </Card>
      )
    })

    return (
        <div>
          <Grid
              container
              direction="row"
              justify="center"
              alignItems="stretch"
          >
            {listMovies}
          </Grid>
        </div>
    )
  }
}

ShowMovies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowMovies);
