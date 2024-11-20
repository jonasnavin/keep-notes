import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const ArchivedNote = () => {
  const { archived, handleUnarchive, handleArchivedDelete } = useContext(DataContext)
  return (
    <>
      {
        archived.map(note => (
          <article key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button
              onClick={() => handleUnarchive(note.id)}
            >Unarchive</button>
            <button
              onClick={() => handleArchivedDelete(note.id)}
            >Delete</button>
          </article>
        ))
      }
    </>
  )
}

export default ArchivedNote