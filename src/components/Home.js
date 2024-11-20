import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { Link } from 'react-router-dom'

const Home = () => {
    const { notes, handleDelete, handleArchives } = useContext(DataContext)
    return (
        <>
            {
                notes.map(note => (
                    <article key={note.id}>
                        <Link to={`/edit-note/${note.id}`}>
                            <h3>{note.title}</h3>
                        </Link>
                        <p>{note.body}</p>
                        <button
                            onClick={() => handleDelete(note.id)}
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => handleArchives(note.id)}
                        >
                            Archive
                        </button>
                    </article>
                ))
            }
        </>
    )
}

export default Home