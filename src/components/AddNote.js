import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'

const AddNote = () => {
  const { noteTitle, setNoteTitle, noteBody, setNoteBody, handleSubmit } = useContext(DataContext)
  useEffect(() => {
    setNoteTitle('')
    setNoteBody('')
  }, [setNoteTitle, setNoteBody])
  return (
    <form
      className='add-form'
      onSubmit={handleSubmit}
    >
      <section>
        <input
          className='title-input'
          type="text"
          placeholder='Title'
          autoFocus
          value={noteTitle}
          onChange={e => setNoteTitle(e.target.value)}
        />
        <textarea
          className='body-input'
          placeholder='Take a note...'
          value={noteBody}
          onChange={e => setNoteBody(e.target.value)}
        />
      </section>
      <div>
        <button
          type='submit'
          className='add-button'
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default AddNote