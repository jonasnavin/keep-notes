import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'
import { MdArchive, MdUnarchive } from 'react-icons/md'
import { TbTrashXFilled } from 'react-icons/tb'
import SearchNote from './SearchNote'
import { ImSearch } from 'react-icons/im'

const ArchivedNote = () => {
  const { archived, setActiveSection, search, setSearch, handleUnarchive, handleArchivedDelete } = useContext(DataContext)
  const finalNotes = archived.filter(note => (
    (note.title).toLowerCase().includes(search.toLowerCase()) ||
    (note.body).toLowerCase().includes(search.toLowerCase())
  )).reverse()

  useEffect(() => {
    setSearch('')
    setActiveSection('archive')
  }, [setSearch, setActiveSection])

  return (
    <>
      <SearchNote />
      {
        finalNotes.length ? (
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

                  <div className="bottom-section">
                    <div>
                      <p style={{ fontSize: '12px' }}>{note.dateTime}</p>
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
                  </div>
                </article>
              ))}
          </section >

        ) : !archived.length && !search ? (
          <section className='empty-section'>
            <MdArchive className='svg' />
            <p className='svg-hint'>Your archive notes appear here</p>
          </section>
        ) : !finalNotes.length ? (
          <section className='empty-section'>
            <ImSearch className='svg' />
            <p className='svg-hint'>Search not found</p>
          </section>
        ) : null

      }
    </>
  )
}

export default ArchivedNote