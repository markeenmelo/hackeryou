import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import GetMovies from './components/GetMovies'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <GetMovies />
            </div>
        );
    }
}

export default App;
