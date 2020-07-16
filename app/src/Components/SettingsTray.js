import React, { Component } from 'react'
import { ChevronLeft } from 'react-feather'

export default class SettingsTray extends Component {
  render() {
    const { showSettingsTray, sidedrawerHandler, settingsTrayHandler } = this.props
    const user = JSON.parse(localStorage.getItem('user'))
    return (
      <div
        className={showSettingsTray ? 'tray text-center shadow show' : 'tray text-center shadow hide'}
        style={{ width: '350px' }}>
        <span
          className="menu-btn mt-4 ml-3"
          title="Close"
          onClick={() => {
            settingsTrayHandler()
            sidedrawerHandler()
          }}>
          <ChevronLeft size={'24'} />
        </span>
        <h5 className="mt-4">Settings</h5>
        <div className="w-100" style={{ overflowY: 'scroll', height: '90%' }}>
          <ul className="list-group mt-2 p-2">
            <li
              className="list-group-item border-0 d-flex align-items-center justify-content-between"
              style={{ fontSize: '15px' }}>
              <span>Change Avatar</span>
              <div className="avatar-home" style={{ width: '50px', height: '50px' }}>
                <img src={user.avatarUrl} alt="avatar" />
              </div>
            </li>
            <li
              className="list-group-item border-0 d-flex align-items-center justify-content-between"
              style={{ fontSize: '15px' }}>
              <span>Change Name</span>
              <small className="text-black-50">{user.name}</small>
            </li>
            <li
              className="list-group-item border-0 d-flex align-items-center justify-content-between"
              style={{ fontSize: '15px' }}>
              Todos
            </li>
            <li
              className="list-group-item border-0 d-flex align-items-center justify-content-between"
              style={{ fontSize: '15px' }}>
              Notes
            </li>
            <li
              className="list-group-item border-0 d-flex align-items-center justify-content-between"
              style={{ fontSize: '15px' }}>
              Socials
            </li>
          </ul>
          <ul className="list-group mt-11 p-2">
            <li
              className="list-group-item border-0 d-flex align-items-center justify-content-between"
              style={{ fontSize: '15px' }}>
              Help center
            </li>
            <li
              className="list-group-item border-0 d-flex align-items-center justify-content-between"
              style={{ fontSize: '15px' }}>
              <span>Contact us</span>
              <small className="text-primary">dashboard@support.com</small>
            </li>

            <li
              className="list-group-item border-0 d-flex align-items-center justify-content-between"
              style={{ fontSize: '15px' }}>
              Terms of service
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
