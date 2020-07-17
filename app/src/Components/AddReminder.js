import 'react-dropdown/style.css'

import React, { useEffect, useRef, useState } from 'react'
import Dropdown from 'react-dropdown'

const AddReminder = ({ addReminderHandler, modalHandler }) => {
  const [label, setLabel] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [period, setPeriod] = useState('')
  const [day, setDay] = useState('')

  const dayOptions = [
    { value: 'Today', label: 'Today' },
    { value: 'Tomorrow', label: 'Tomorrow' }
  ]
  const periodOptions = [
    { value: 'AM', label: 'AM' },
    { value: 'PM', label: 'PM' }
  ]

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          modalHandler()
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  const checkSubmit = (label, hour, minute, period, day) => {
    if (label === '' || hour === '' || minute === '') return
    const time = hour + ':' + minute
    addReminderHandler(label, time, period, day)
    modalHandler()
  }
  return (
    <div className="add-modal-ctn show">
      <div ref={wrapperRef} className="add-reminder-modal shadow-lg p-4 rounded-sm">
        <h4>New Reminder</h4>

        <div className="container text-right mt-4">
          <div className="form-group text-left">
            <label>Label</label>
            <input className="form-control" type="text" autoFocus={true} onChange={(e) => setLabel(e.target.value)} />
          </div>
          <div className="form-group text-left mt-4">
            <label>Time</label>
            <div className="d-flex align-items-center justify-content-center">
              <input
                className="form-control mx-1 time-input"
                type="number"
                placeholder="Hour"
                style={{ width: '30%' }}
                min="0"
                max="12"
                maxLength="2"
                onChange={(e) => setHour(e.target.value)}
              />
              :
              <input
                className="form-control mx-1 time-input"
                type="number"
                placeholder="Minute"
                style={{ width: '30%' }}
                min="0"
                max="59"
                maxLength="2"
                onChange={(e) => setMinute(e.target.value)}
              />
              <Dropdown
                className="period"
                options={periodOptions}
                placeholder="AM"
                value={period}
                onChange={(period) => setPeriod(period.value)}
              />
            </div>
          </div>
          <div className="form-group d-flex align-items-center justify-content-center mt-6 text-left">
            <Dropdown
              className="select-day"
              options={dayOptions}
              value={day}
              onChange={(day) => setDay(day.value)}
              placeholder="Today"
            />
          </div>
          <button className="btn btn-primary" onClick={() => checkSubmit(label, hour, minute, period, day)}>
            Set
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddReminder
