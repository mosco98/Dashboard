import React, { Component } from 'react'

import Home from './Pages/Home'
import Intro from './Pages/Intro'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount() {
    this.checkLoggedIn()
  }

  checkLoggedIn = () => {
    const user = localStorage.getItem('user') // Get user name from local storage
    if (user) {
      // If user name exists, set user to logged in

      return this.setState({ isLoggedIn: true })
    }
  }

  isLoggedInHandler = (name, avatarUrl) => {
    this.setState({ isLoggedIn: true }) // Setting user to logged in
    let user = { name, avatarUrl }

    // TODO: Change to chrome storage API
    localStorage.setItem('user', JSON.stringify(user)) // Saving user info to local storage
  }

  render() {
    const { isLoggedIn } = this.state
    const CurrentView = isLoggedIn ? Home : Intro // Conditional rendering checking if user
    return (
      <div className="vh-100 w-100 body-wrapper">
        <CurrentView isLoggedInHandler={this.isLoggedInHandler} />
      </div>
    )
  }
}
