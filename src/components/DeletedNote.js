import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { MdOutlineSettingsBackupRestore } from 'react-icons/md'
import { TbTrashXFilled } from 'react-icons/tb'

const DeletedNote = () => {
    const { trash, search, handleRestore, handlePermanentDelete } = useContext(DataContext)
    const finalNotes = trash.filter(note => (
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
                            <h3 className='note-title'>{note.title}</h3>
                            <p className='note-body'>{note.body}</p>
                        </div>
                        <div className='button-section'>
                            <button
                                title='Delete Permanently'
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
                                <MdOutlineSettingsBackupRestore />
                            </button>
                        </div>
                    </article>
                ))
            }
        </section>
    )
}

export default DeletedNote