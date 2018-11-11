import React, {Component} from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectName: 'HackerYou Project 3',
            movies: []
        }
    }

    componentDidMount() {
        const url = 'https://api.themoviedb.org/4/list/1'
        const options = {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2VjYzBjMjNiNjczMmZkOWQ0NjRjZDk5ZDUxZjZlMSIsInN1YiI6IjViZDUzYTJkOTI1MTQxMDNhMDAyNDlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5X-5HPY62-x6BW_56KZcu6_VoCN3SDC-0pkyxbQfNY',
            'Content-Type': 'application/json;charset=utf-8'
        }

        axios.get(url, {headers: options})
            .then(res => this.setState({movies: res.data.results}))
            .catch(err => err)
    }

    render() {
        const movies = this.state.movies.map(movie => <li key={movie.id}>{movie.title}</li>)
        return (
            <div className="App">
                <h1>{this.state.projectName}</h1>
                <ul>
                    {movies}
                </ul>
            </div>
        );
    }
}

export default App;
