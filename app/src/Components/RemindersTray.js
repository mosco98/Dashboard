import React, { Component } from 'react'
import { ChevronLeft } from 'react-feather'
import { uuid } from 'uuidv4'

import AddReminder from './AddReminder'

export default class RemindersTray extends Component {
  constructor() {
    super()
    this.state = {
      reminders: [],
      showModal: false
    }
  }

  componentDidMount() {
    this.getReminders()
  }

  getReminders = () => {
    const reminders = JSON.parse(localStorage.getItem('reminders'))

    if (reminders) {
      this.setState({ reminders })
    } else {
      this.setState({ reminders: [] })
    }
  }

  addReminderHandler = (label, time, period, day) => {
    const newReminder = {
      id: uuid(),
      label,
      time,
      period: period === '' ? 'AM' : period,
      day: day === '' ? 'Today' : day,
      completed: false
    }

    let array = []
    array = this.state.reminders

    array.push(...array, newReminder)

    const newReminders = [...new Set(array)]

    this.setState({ reminders: newReminders })

    // TODO: Change to chrome storage API
    localStorage.setItem('reminders', JSON.stringify(newReminders))
  }

  modalHandler = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal
    }))
  }

  render() {
    const { showRemindersTray, sidedrawerHandler, remindersTrayHandler } = this.props
    const { reminders, showModal } = this.state
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
        {reminders.length ? (
          <div className="w-100">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <ul className="list-group text-left mt-4 p-2 w-100" style={{ overflowY: 'scroll', height: '90%' }}>
                {reminders.map((reminder, i) => (
                  <li key={i} className="list-group-item border-0 rounded-0">
                    {reminder.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div
            className="w-100 d-flex align-items-center justify-content-center"
            style={{ overflowY: 'scroll', height: '90%' }}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <span>No Reminders yet</span>
              <small
                className="badge-primary p-1 mt-2 rounded-sm"
                style={{ cursor: 'pointer' }}
                onClick={this.modalHandler}>
                Add Reminder
              </small>
            </div>
          </div>
        )}
        {showModal && <AddReminder modalHandler={this.modalHandler} addReminderHandler={this.addReminderHandler} />}
      </div>
    )
  }
}
