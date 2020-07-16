import React, { useEffect, useRef, useState } from 'react'
import { Edit3, Trash2 } from 'react-feather'

const Note = ({ id, title, body, editNoteHandler, deleteNoteHandler }) => {
  const [editting, setEditting] = useState(false)
  const [editTitle, setEditTitle] = useState(title)
  const [editBody, setEditBody] = useState(body)

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setEditting(false)
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

  return (
    <div className="note p-4 d-flex align-items-center justify-content-center" ref={wrapperRef}>
      <div className="note-btns mt-5 mr-4 p-2 d-flex">
        <span
          className="badge-gray p-2 mx-3 d-flex align-items-center justify-content-center"
          onClick={() => setEditting(true)}>
          <span>Edit</span>
          <Edit3 size={'18'} />
        </span>
        <span
          className="badge-danger p-2 mx-3 d-flex align-items-center justify-content-center"
          onClick={() => deleteNoteHandler(id)}>
          <span>Delete</span>
          <Trash2 size={'18'} />
        </span>
      </div>
      {editting ? (
        <div className="w-75 text-left mt-8" style={{ overflowY: 'scroll', height: '80%' }}>
          <h3 className="text-center">{editTitle}</h3>
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '90%' }}>
            <div className="form-group w-75">
              <label>Title</label>
              <input
                className="form-control"
                type="text"
                defaultValue={title}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>

            <div className="h-50 form-group w-75">
              <label>Note</label>
              <textarea
                className="form-control"
                style={{ height: '90%' }}
                defaultValue={body}
                onChange={(e) => setEditBody(e.target.value)}></textarea>
            </div>

            <div className="d-flex align-items-center justify-content-end w-75 mt-3">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setEditting(false)
                  editNoteHandler(id, editTitle, editBody)
                }}>
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-75 mt-8" style={{ overflowY: 'scroll', height: '80%' }}>
          <h3>{title}</h3>
          <div className="container text-left mt-5" style={{ width: '80%' }}>
            <p>{body}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Note
