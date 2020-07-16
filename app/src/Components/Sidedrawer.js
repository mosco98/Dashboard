import React from 'react'
import { X } from 'react-feather'

import RemindersIcon from '../Assets/icons/icons8-doorbell-48.png'
import PhotosIcon from '../Assets/icons/icons8-photo-gallery-48.png'
import SettingsIcon from '../Assets/icons/icons8-settings-48.png'
import SocialIcon from '../Assets/icons/icons8-social-network-64.png'
import NotesIcon from '../Assets/icons/icons8-task-100.png'

const Sidedrawer = ({
  showSidedrawer,
  sidedrawerHandler,
  photosTrayHandler,
  settingsTrayHandler,
  notesTrayHandler,
  remindersTrayHandler,
  socialsTrayHandler
}) => {
  return (
    <React.Fragment>
      {showSidedrawer && <div className="back-drop" onClick={sidedrawerHandler} />}
      <div className={showSidedrawer ? 'side-drawer bg-white show shadow' : 'side-drawer bg-white'}>
        <span className="text-center icon-side-drawer mt-3 w-100">
          <h3>Icon</h3>
        </span>
        <ul className="list-group mt-12">
          <li
            className="list-group-item border-0 d-flex align-items-center"
            onClick={() => {
              photosTrayHandler()
              sidedrawerHandler()
            }}>
            <img src={PhotosIcon} width="20px" height="20px" alt="photos-icon" />
            <span className="ml-2">Photos</span>
          </li>
          <li
            className="list-group-item border-0 d-flex align-items-center"
            onClick={() => {
              sidedrawerHandler()
              notesTrayHandler()
            }}>
            <img src={NotesIcon} width="20px" height="20px" alt="notes-icon" />
            <span className="ml-2">Notes</span>
          </li>
          <li
            className="list-group-item border-0 d-flex align-items-center"
            onClick={() => {
              sidedrawerHandler()
              socialsTrayHandler()
            }}>
            <img src={SocialIcon} width="20px" height="20px" alt="social-icon" />
            <span className="ml-2">Socials</span>
          </li>
          <li
            className="list-group-item border-0 d-flex align-items-center"
            onClick={() => {
              sidedrawerHandler()
              remindersTrayHandler()
            }}>
            <img src={RemindersIcon} width="20px" height="20px" alt="reminders-icon" />
            <span className="ml-2">Reminders</span>
          </li>
          <li
            className="list-group-item border-0 d-flex align-items-center"
            onClick={() => {
              sidedrawerHandler()
              settingsTrayHandler()
            }}>
            <img src={SettingsIcon} width="20px" height="20px" alt="settings-icon" />
            <span className="ml-2">Settings</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Sidedrawer
