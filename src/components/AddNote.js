import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'

const AddNote = () => {
  const { noteTitle, setNoteTitle, noteBody, setNoteBody, handleSubmit, setSearch } = useContext(DataContext)
  useEffect(() => {
    setNoteTitle('')
    setNoteBody('')
  }, [setNoteTitle, setNoteBody])
  useEffect(() => {
    setSearch('')
  }, [setSearch])
  return (
    <form
      className='add-form'
      onSubmit={handleSubmit}
    >
      <section className='section-1'>
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
      <section className='section-2'>
        <button
          type='submit'
          className='add-button'
        >
          Add
        </button>
      </section>
    </form>
  )
}

export default AddNote