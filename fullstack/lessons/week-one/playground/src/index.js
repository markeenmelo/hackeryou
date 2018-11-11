import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import animals from './animals'

class App extends Component {
    state = {
        visitors: 0
    }

    handleClick = () => {
        const previous = this.state.visitors
        this.setState({
            visitors: previous + 1
        })
    }

    renderAnimal = animal => (
        <div key={animal.picture}>
            <h2>{animal.name}</h2>
            <img alt="" src={animal.picture}/>
        </div>
    )

    render() {
        console.log(animals)
        return (
            <div>
                {animals.map(this.renderAnimal)}
                <Counter visitors={this.state.visitors} handleClick={this.handleClick}/>
                {/*<Counter visitors={this.state.visitors} handleClick={this.handleClick}/>*/}
                {/*<Counter visitors={this.state.visitors} handleClick={this.handleClick}/>*/}
            </div>
        );
    }
}

const Counter = ({handleClick, visitors}) => {
    return (
        <div>
            You are visitor number {visitors}.
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
/*
class Button extends Component {
    static handleClick() {
        alert('Tee-hee')
    }

    render() {
        return (
            <button onClick={Button.handleClick}>Click me</button>
        )
    }
}

class TwitterWidget extends Component {
    render() {
        return (
            <div className='twitter-widget'>
                <h2>Twitter Widget</h2>
                <p>Displaying 10 most recent tweets</p>
                ...
            </div>
        )
    }
}
*/

ReactDOM.render(<App/>, document.getElementById('root'))
