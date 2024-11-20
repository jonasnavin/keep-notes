import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const DeletedNote = () => {
    const { trash, handleRecover, handlePermanentDelete } = useContext(DataContext)
    return (
        <>
            {
                trash.map(note => (
                    <article key={note.id}>
                        <h3>{note.title}</h3>
                        <p>{note.body}</p>
                        <button
                        onClick={() => handleRecover(note.id)}
                        >Restore</button>
                        <button
                        onClick={() => handlePermanentDelete(note.id)}
                        >Delete Permanently</button>
                    </article>
                ))
            }
        </>
    )
}

export default DeletedNote