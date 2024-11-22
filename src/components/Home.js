import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'
import { Link } from 'react-router-dom'
import { MdArchive } from 'react-icons/md'
import { TbTrashXFilled } from 'react-icons/tb'
import { SiGoogledocs } from 'react-icons/si'

const Home = () => {

    const { notes, search, setSearch, handleDelete, handleArchives } = useContext(DataContext)

    const finalNotes = notes.filter(note => (
        (note.title).toLowerCase().includes(search.toLowerCase()) ||
        (note.body).toLowerCase().includes(search.toLowerCase())
    )).reverse()

    useEffect(() => {
        setSearch('')
    }, [setSearch])


    return (
        <> {
            finalNotes.length ? (
                <section className='notes-section'>
                    {
                        finalNotes.map(note => (
                            <article
                                key={note.id}
                                className='notes'
                            >
                                <div className="content-section">
                                    <Link to={`/note/${note.id}`}>
                                        <h3 className='note-title'>{note.title}</h3>
                                        <p className='note-body'>{note.body}</p>
                                    </Link>
                                </div>
                                <div className='bottom-section'>
                                    <div>
                                        <p style={{ fontSize: '12px' }}>{note.dateTime}</p>
                                    </div>
                                    <div className='button-section'>
                                        <button
                                            title='Delete Note'
                                            className='button-groups delete-button'
                                            onClick={() => handleDelete(note.id)}
                                        >
                                            <TbTrashXFilled />
                                        </button>
                                        <button
                                            title='Archive Note'
                                            className='button-groups archive-button'
                                            onClick={() => handleArchives(note.id)}
                                        >
                                            <MdArchive />
                                        </button>

                                        {/* <button
                                            className='button-groups edit-button'
                                            title='Edit Note'>
                                            <Link to={`/edit-note/${note.id}`}>
                                                <MdEdit />
                                            </Link>
                                        </button> */}
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </section>
            ) : !notes.length && !search ? (
                <section className='empty-section'>
                    <SiGoogledocs className='svg' />
                    <p className='svg-hint'>Notes you add appear here.</p>
                </section>
            ) : !finalNotes.length ? (
                <section className='empty-section'>
                    <SiGoogledocs className='svg' />
                    <p className='svg-hint'>Search not found</p>
                </section>
            ) : null
        }</>
    )
}

export default Home