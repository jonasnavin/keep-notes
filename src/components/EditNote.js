import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'
import { useParams } from 'react-router-dom'

const EditNote = () => {
  const { notes, editTitle, setEditTitle, editBody, setEditBody, handleEditedSubmit, handleCancel, setSearch } = useContext(DataContext)
  const { id } = useParams()
  const note = notes.find(note => (note.id).toString() === id)
  useEffect(() => {
    if (note) {
      setEditTitle(note.title)
      setEditBody(note.body)
    }
  }, [note, setEditTitle, setEditBody])
  useEffect(() => {
    setSearch('')
  }, [setSearch])
  return (
    <form
      className='edit-form'
      onSubmit={e => e.preventDefault()}>
      <section className="section-1">
        <input
          type="text"
          autoFocus
          className='edit-title'
          value={editTitle}
          onChange={e => setEditTitle(e.target.value)}
        />
        <textarea
          className='edit-body'
          value={editBody}
          onChange={e => setEditBody(e.target.value)}
        />
      </section>
      <section className="section-2">
        <button
          className='edit-submit-button'
          onClick={() => handleEditedSubmit(id)}>
          Submit
        </button>
        <button
          className='cancel-button'
          onClick={handleCancel}
        >
          Cancel
        </button>
      </section>
    </form>
  )
}

export default EditNote