import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'
import { TbTrashXFilled } from 'react-icons/tb'
import { FaTrashAlt } from 'react-icons/fa'
import { MdRestoreFromTrash } from 'react-icons/md'
import { SiGoogledocs } from 'react-icons/si'
import SearchNote from './SearchNote'

const DeletedNote = () => {
    const { trash, search, setSearch, handleRestore, handlePermanentDelete } = useContext(DataContext)
    const finalNotes = trash.filter(note => (
        (note.title).toLowerCase().includes(search.toLowerCase()) ||
        (note.body).toLowerCase().includes(search.toLowerCase())
    )).reverse()

    useEffect(() => {
        setSearch('')
    }, [setSearch])

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
                                    <div className="content-section">
                                        <h3 className='note-title'>{note.title}</h3>
                                        <p className='note-body'>{note.body}</p>
                                    </div>
                                    <div className="bottom-section">
                                        <div>
                                            <p style={{ fontSize: '12px' }}>{note.dateTime}</p>
                                        </div>
                                        <div className='button-section'>
                                            <button
                                                title='Delete Forever'
                                                className='button-groups delete-button'
                                                onClick={() => handlePermanentDelete(note.id)}
                                            >
                                                <TbTrashXFilled />
                                            </button>
                                            <button
                                                title='Restore Note'
                                                className='button-groups restore-button'
                                                onClick={() => handleRestore(note.id)}
                                            >
                                                <MdRestoreFromTrash />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                    </section>
                ) : !trash.length && !search ? (
                    <section className='empty-section'>
                        <FaTrashAlt className='svg' />
                        <p className='svg-hint'>No notes in Recyle Bin</p>
                    </section>
                ) : !finalNotes.length ? (
                    <section className='empty-section'>
                        <SiGoogledocs className='svg' />
                        <p className='svg-hint'>Search not found</p>
                    </section>
                ) : null
            }
        </>
    )
}

export default DeletedNote