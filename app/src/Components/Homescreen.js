import React from 'react'
import Clock from 'react-live-clock'

import FacebookIcon from '../Assets/icons/icons8-facebook-48.png'
import LinkedInIcon from '../Assets/icons/icons8-linkedin-48.png'
import TwitterIcon from '../Assets/icons/icons8-twitter.svg'

const Homescreen = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className="container w-75 h-50 text-white d-flex align-items-center justify-content-center flex-column text-center user-select-none">
      <div>
        <div className="avatar-home">
          <img src={user.avatarUrl} alt="avatar" />
        </div>
      </div>
      <div className="mt-3 w-50 d-flex align-items-center justify-content-center">
        <span className="icon mx-1">
          <img src={FacebookIcon} width="32px" height="32px" alt="fb-icon" />
        </span>
        <span className="icon mx-1">
          <img src={TwitterIcon} width="32px" height="32px" alt="twitter-icon" />
        </span>
        <span className="icon mx-1">
          <img src={LinkedInIcon} width="32px" height="32px" alt="linkedin-icon" />
        </span>
      </div>
      <h1 className="time" id="time">
        <Clock format="h:mm" interval={1000} />
      </h1>
      <span className="greeting">Good evening, {user.name}.</span>
    </div>
  )
}

export default Homescreen
