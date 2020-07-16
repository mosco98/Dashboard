import React, { Component } from 'react'
import { Menu } from 'react-feather'

import defaultBgPhoto from '../Assets/images/ahoy.jpg'
import Homescreen from '../Components/Homescreen'
import NotesTray from '../Components/NotesTray'
import PhotosTray from '../Components/PhotosTray'
import RemindersTray from '../Components/RemindersTray'
import SettingsTray from '../Components/SettingsTray'
import Sidedrawer from '../Components/Sidedrawer'
import SocialsTrays from '../Components/SocialsTrays'
import TodosTray from '../Components/TodosTray'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      showSidedrawer: false,
      homeStyle: {},
      showPhotosTray: false,
      showSettingsTray: false,
      showNotesTray: false,
      showRemindersTray: false,
      showSocialsTray: false
    }
  }

  componentDidMount() {
    this.setBgImage()
  }

  sidedrawerHandler = () => {
    this.setState((prevState) => ({
      showSidedrawer: !prevState.showSidedrawer
    }))
  }

  setBgImage = () => {
    const currentBgImage = localStorage.getItem('bgImg')
    if (currentBgImage) {
      let style = {
        background: `url(${currentBgImage})`
      }
      this.setState({ homeStyle: style })
    } else {
      let style = {
        background: `url(${defaultBgPhoto})`
      }
      this.setState({ homeStyle: style })
    }
  }

  changeBgImageHandler = (imgSrc) => {
    let style = {
      background: `url(${imgSrc})`
    }
    this.setState({ homeStyle: style })
    localStorage.setItem('bgImg', imgSrc)
  }

  photosTrayHandler = () => {
    this.setState((prevState) => ({
      showPhotosTray: !prevState.showPhotosTray
    }))
  }
  settingsTrayHandler = () => {
    this.setState((prevState) => ({
      showSettingsTray: !prevState.showSettingsTray
    }))
  }

  notesTrayHandler = () => {
    this.setState((prevState) => ({
      showNotesTray: !prevState.showNotesTray
    }))
  }
  remindersTrayHandler = () => {
    this.setState((prevState) => ({
      showRemindersTray: !prevState.showRemindersTray
    }))
  }

  socialsTrayHandler = () => {
    this.setState((prevState) => ({
      showSocialsTray: !prevState.showSocialsTray
    }))
  }

  render() {
    const {
      showSidedrawer,
      homeStyle,
      showPhotosTray,
      showSettingsTray,
      showNotesTray,
      showRemindersTray,
      showSocialsTray
    } = this.state

    return (
      <div className="vh-100 w-100 home animate__animated animate__fadeIn animate__faster" style={homeStyle}>
        <div className="h-100 w-100 home-overlay d-flex align-items-center justify-content-center">
          <span className="menu-btn mt-3 ml-3" onClick={this.sidedrawerHandler}>
            <Menu size={'30'} color={'#fff'} />
          </span>
          <Sidedrawer
            showSidedrawer={showSidedrawer}
            sidedrawerHandler={this.sidedrawerHandler}
            photosTrayHandler={this.photosTrayHandler}
            settingsTrayHandler={this.settingsTrayHandler}
            notesTrayHandler={this.notesTrayHandler}
            remindersTrayHandler={this.remindersTrayHandler}
            socialsTrayHandler={this.socialsTrayHandler}
          />
          <Homescreen />
          <PhotosTray
            changeBgImageHandler={this.changeBgImageHandler}
            sidedrawerHandler={this.sidedrawerHandler}
            photosTrayHandler={this.photosTrayHandler}
            showPhotosTray={showPhotosTray}
          />
          <SettingsTray
            showSettingsTray={showSettingsTray}
            sidedrawerHandler={this.sidedrawerHandler}
            settingsTrayHandler={this.settingsTrayHandler}
          />
          <NotesTray
            showNotesTray={showNotesTray}
            sidedrawerHandler={this.sidedrawerHandler}
            notesTrayHandler={this.notesTrayHandler}
          />
          <RemindersTray
            showRemindersTray={showRemindersTray}
            sidedrawerHandler={this.sidedrawerHandler}
            remindersTrayHandler={this.remindersTrayHandler}
          />
          <SocialsTrays
            showSocialsTray={showSocialsTray}
            sidedrawerHandler={this.sidedrawerHandler}
            socialsTrayHandler={this.socialsTrayHandler}
          />
          <TodosTray />
        </div>
      </div>
    )
  }
}
