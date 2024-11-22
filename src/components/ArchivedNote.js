import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { MdArchive, MdUnarchive } from 'react-icons/md'
import { TbTrashXFilled } from 'react-icons/tb'

const ArchivedNote = () => {
  const { archived, search, handleUnarchive, handleArchivedDelete } = useContext(DataContext)
  const finalNotes = archived.filter(note => (
    (note.title).toLowerCase().includes(search.toLowerCase()) ||
    (note.body).toLowerCase().includes(search.toLowerCase())
  )).reverse()
  return (
    <>
      {
        archived.length ? (
          <section className='notes-section'>
            {
              finalNotes.map(note => (

                <article
                  key={note.id}
                  className='notes'
                >
                  <div className='content-section'>
                    <h3 className='note-title'>{note.title}</h3>
                    <p className='note-body'>{note.body}</p>
                  </div>
                  <div className='button-section'>
                    <button
                      title='Delete Note'
                      className='button-groups delete-button'
                      onClick={() => handleArchivedDelete(note.id)}
                    >
                      <TbTrashXFilled />
                    </button>
                    <button
                      title='Unarchieve Note'
                      className='button-groups unarchive-button'
                      onClick={() => handleUnarchive(note.id)}
                    >
                      <MdUnarchive />
                    </button>
                  </div>
                </article>
              ))}
          </section >

        ) : (
          <section className='view-note'>
            <MdArchive className='svg' />
            <p className='svg-hint'>Your archive notes appear here</p>
          </section>
        )

      }
    </>
  )
}

export default ArchivedNote