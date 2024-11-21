import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'
import { useParams } from 'react-router-dom'

const EditNote = () => {
  const { notes, editTitle, setEditTitle, editBody, setEditBody, handleEditedSubmit } = useContext(DataContext)
  const { id } = useParams()
  const note = notes.find(note => (note.id).toString() === id)
  useEffect(() => {
    if (note) {
      setEditTitle(note.title)
      setEditBody(note.body)
    }
  }, [note, setEditTitle, setEditBody])
  return (
    <form
    className='edit-form'
    onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        autoFocus
        className='edit-title'
        value={editTitle}
        onChange={e => setEditTitle(e.target.value)}
        />
      <input
        type="text"
        className='edit-body'
        value={editBody}
        onChange={e => setEditBody(e.target.value)}
        />
        <button
        className='edit-submit-button'
        onClick={() => handleEditedSubmit(id)}>Submit</button>
    </form>
  )
}

export default EditNote