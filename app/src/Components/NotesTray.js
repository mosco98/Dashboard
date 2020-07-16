import React, { Component } from 'react'
import { ChevronLeft, FileText } from 'react-feather'
import { uuid } from 'uuidv4'

import AddNote from './AddNote'
import Note from './Note'

export default class NotesTray extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      notes: [],
      selectedNote: []
    }
  }

  componentDidMount() {
    this.getNotes()
  }
  getNotes = () => {
    const notes = JSON.parse(localStorage.getItem('notes'))

    if (notes) {
      this.setState({ notes })
    } else {
      this.setState({ notes: [] })
    }
  }

  modalHandler = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal
    }))
  }

  displayNoteHandler = (noteId) => {
    this.setState({
      selectedNote: this.state.notes.filter((note) => note.id === noteId)
    })
  }

  addNoteHandler = (title, body) => {
    const newNote = {
      id: uuid(),
      title,
      body
    }
    let array = []
    array = this.state.notes

    array.push(...array, newNote)

    const newNotes = [...new Set(array)]

    this.setState({ notes: newNotes })

    // TODO: Change to chrome storage API
    localStorage.setItem('notes', JSON.stringify(newNotes))
  }

  editNoteHandler = (id, title, body) => {
    const newNotes = this.state.notes.filter((note) => {
      if (note.id === id) {
        note.title = title
        note.body = body
      }
      return note
    })
    this.setState({
      notes: newNotes
    })
    // TODO: Change to chrome storage API
    localStorage.setItem('notes', JSON.stringify(newNotes))
  }

  deleteNoteHandler = (id) => {
    const newNotes = this.state.notes.filter((note) => note.id !== id)
    this.setState({
      notes: newNotes,
      selectedNote: []
    })
    // TODO: Change to chrome storage API
    localStorage.setItem('notes', JSON.stringify(newNotes))
  }

  render() {
    const { showNotesTray, sidedrawerHandler, notesTrayHandler } = this.props
    const { showModal, notes, selectedNote } = this.state
    const user = JSON.parse(localStorage.getItem('user'))
    return (
      <div
        className={showNotesTray ? 'tray text-center shadow show' : 'tray text-center shadow hide'}
        style={{ width: '25%', minWidth: '300px' }}>
        <span
          className="menu-btn mt-4 ml-3"
          title="Close"
          onClick={() => {
            notesTrayHandler()
            sidedrawerHandler()
          }}>
          <ChevronLeft size={'24'} />
        </span>
        <h5 className="mt-4">Notes</h5>
        {notes.length ? (
          <div className="w-100 text-right mt-4">
            <small
              className="badge-primary p-1 rounded-sm mr-3"
              style={{ cursor: 'pointer' }}
              onClick={this.modalHandler}>
              Add new note
            </small>
            <ul className="list-group text-left mt-4 p-2" style={{ overflowY: 'scroll', height: '90%' }}>
              {notes.map((note, i) => (
                <li
                  key={i}
                  className={
                    selectedNote.length && selectedNote[0].id === note.id
                      ? 'list-group-item border-0 text-break d-flex align-items-center justify-content-start selected rounded-0'
                      : 'list-group-item border-0 text-break d-flex align-items-center justify-content-start rounded-0'
                  }
                  onClick={() => this.displayNoteHandler(note.id)}>
                  <FileText className="text-primary" size={'17'} />
                  <span className="ml-2" style={{ width: '90%' }}>
                    {note.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div
            className="w-100 d-flex align-items-center justify-content-center"
            style={{ overflowY: 'scroll', height: '90%' }}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <span>No notes available</span>
              <small
                className="badge-primary p-1 mt-2 rounded-sm"
                style={{ cursor: 'pointer' }}
                onClick={this.modalHandler}>
                Add note
              </small>
            </div>
          </div>
        )}
        {showModal && <AddNote addNoteHandler={this.addNoteHandler} modalHandler={this.modalHandler} />}
        {selectedNote.length ? (
          <Note
            editNoteHandler={this.editNoteHandler}
            {...selectedNote[0]}
            deleteNoteHandler={this.deleteNoteHandler}
          />
        ) : null}
      </div>
    )
  }
}
