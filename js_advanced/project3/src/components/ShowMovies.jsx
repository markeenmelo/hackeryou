import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import axios from "axios"

const styles = theme => ({
  card: {
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  }
})

class ShowMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      expanded: false
    }
  }

  componentDidMount() {
    axios
        .get(`${process.env.REACT_APP_API_URL}discover/movie?with_genres=${this.props.genre.value}&api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => this.setState({movies: res.data.results}))
        .catch(err => err)
  }

  componentDidUpdate(prevProps, prevState): void {
    if (prevProps.genre.value !== this.props.genre.value) {
      axios
          .get(`${process.env.REACT_APP_API_URL}discover/movie?with_genres=${this.props.genre.value}&api_key=${process.env.REACT_APP_API_KEY}`)
          .then(res => this.setState({movies: res.data.results}))
          .catch(err => err)
    }
  }

  render() {
    const { classes } = this.props;

    let listMovies = this.state.movies.map(movie => {
      return (
          <Card
              className={classes.card}
              key={movie.id}
          >
            <CardHeader
                title={movie.title}
                subheader={movie.release_date}
            />
            <CardMedia
                className={classes.media}
                image={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <CardContent>
              <Typography component="p">
                {movie.overview}
              </Typography>
            </CardContent>
      </Card>
    )
    })

    return (
        <div>
        {listMovies}
        </div>
    )
  }
}

ShowMovies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowMovies);
