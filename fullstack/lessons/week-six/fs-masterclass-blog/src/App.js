import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Users from './components/Users'
import Posts from './components/Posts'
import Post from './components/Post'
import AddPost from './components/AddPost'

class App extends Component {
  state = {
	user: null
  }

  login = async () => {
	// Get all users
	const res = await axios.get('/users')
	// Return first user from array
	return res.data.data[0]
  }

  async componentDidMount() {
	// Call login method
	const user = await this.login()
	// Set first user into state
	this.setState({user})
  }

  render () {
	const { user } = this.state
	if (!user) return <h1>Not logged in.</h1>
	return (
		<Router>
		  <div>
			<h1>Welcome {this.state.user.name}!</h1>
			<p>To see a list of users, <Link to='/users'>click here.</Link></p>
			<p>To see a list of posts, <Link to='/posts'>click here.</Link></p>
			<p>To add a new post, <Link to='/posts/add'>click here.</Link></p>
			<Route path='/users' component={Users} />
			<Route exact path='/posts' component={Posts} />
			<Switch>
			  <Route path={`/posts/add`} render={props => <AddPost {...props} user={user} />} />
			  <Route path={'/posts/:post_id'} component={Post} />
			</Switch>
		  </div>
		</Router>
	)
  }
}

export default App;
