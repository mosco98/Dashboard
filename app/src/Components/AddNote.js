import React, { useEffect, useRef, useState } from 'react'

const AddNote = ({ modalHandler, addNoteHandler }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitNote = () => {
    if (title === '' || body === '') return

    addNoteHandler(title, body)
    modalHandler()
  }
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

  return (
    <div className="add-note-ctn text-left show">
      <div ref={wrapperRef} className="add-note-modal shadow-lg p-4 rounded-sm ml-5">
        <h4 className="text-center">{title ? title : 'New note'}</h4>
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '90%' }}>
          <div className="form-group w-75">
            <label>Title</label>
            <input className="form-control" type="text" onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="h-50 form-group w-75">
            <label>Note</label>
            <textarea
              className="form-control"
              style={{ height: '80%' }}
              onChange={(e) => setBody(e.target.value)}></textarea>
          </div>

          <div className="d-flex align-items-center justify-content-end w-75">
            <button className="btn btn-primary" onClick={submitNote}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNote
