import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const AddNote = () => {
  const { noteTitle, setNoteTitle, noteBody, setNoteBody, handleSubmit } = useContext(DataContext)
  return (
    <form
      className='add-form'
      onSubmit={handleSubmit}
    >
      <input
        className='title-input'
        type="text"
        placeholder='Title'
        autoFocus
        value={noteTitle}
        onChange={e => setNoteTitle(e.target.value)}
      />
      <input
        className='body-input'
        type="text"
        placeholder='Take a note...'
        value={noteBody}
        onChange={e => setNoteBody(e.target.value)}
      />
      <button
        type='submit'
        >
        Add
      </button>
    </form>
  )
}

export default AddNote