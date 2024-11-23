import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from '../context/DataContext'
import { MdArchive, MdEdit } from 'react-icons/md'
import { TbTrashXFilled } from 'react-icons/tb'

const Note = () => {
    const { id } = useParams()
    const { notes, handleDelete, handleArchives, setSearch } = useContext(DataContext)
    const note = notes.find(note => (note.id).toString() === id)
    useEffect(() => {
        setSearch('')
    }, [setSearch])
    return (
        <section className='view-note'>
            {
                note && <>
                    <div className="button-section">
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
                    <div className="content-section">
                        <h3 className='note-title'>{note.title}</h3>
                        <p className='note-body'>{note.body}</p>
                    </div>
                </>
            }
        </section>
    )
}

export default Note