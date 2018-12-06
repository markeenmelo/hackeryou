import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import GetGenres from './components/GetGenres'
// import GetCast from './components/GetCast'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <GetGenres/>
          {/*<GetCast/>*/}
        </div>
    );
  }
}

export default App;
