import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import GetGenres from './components/GetGenres'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <GetGenres />
            </div>
        );
    }
}

export default App;
