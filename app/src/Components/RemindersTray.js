import React, { Component } from 'react'
import { ChevronLeft } from 'react-feather'

export default class RemindersTray extends Component {
  render() {
    const { showRemindersTray, sidedrawerHandler, remindersTrayHandler } = this.props
    const user = JSON.parse(localStorage.getItem('user'))
    return (
      <div
        className={showRemindersTray ? 'tray text-center shadow show' : 'tray text-center shadow hide'}
        style={{ width: '25%' }}>
        <span
          className="menu-btn mt-4 ml-3"
          title="Close"
          onClick={() => {
            sidedrawerHandler()
            remindersTrayHandler()
          }}>
          <ChevronLeft size={'24'} />
        </span>
        <h5 className="mt-4">Reminders</h5>
        <div
          className="w-100 d-flex align-items-center justify-content-center"
          style={{ overflowY: 'scroll', height: '90%' }}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <span>No Reminders yet</span>
            <small className="badge-dark p-1 mt-2 rounded-sm" style={{ cursor: 'pointer' }}>
              Add Reminder
            </small>
          </div>
        </div>
      </div>
    )
  }
}
