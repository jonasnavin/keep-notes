import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { Link } from 'react-router-dom'
import { MdArchive, MdEdit } from 'react-icons/md'
import { TbTrashXFilled } from 'react-icons/tb'

const Home = () => {
    const { notes, search, handleDelete, handleArchives } = useContext(DataContext)
    const finalNotes = notes.filter(note => (
        (note.title).toLowerCase().includes(search.toLowerCase()) ||
        (note.body).toLowerCase().includes(search.toLowerCase())
    )).reverse()
    return (
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

                            <button
                                className='button-groups edit-button'
                                title='Edit Note'>
                                <Link to={`/edit-note/${note.id}`}>
                                    <MdEdit />
                                </Link>
                            </button>
                        </div>
                    </article>
                ))
            }
        </section>
    )
}

export default Home