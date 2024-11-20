import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "Note 1",
            body: "Body 1"
        },
        {
            id: 2,
            title: "Note 2",
            body: "Body 2"
        }
    ])

    const [noteTitle, setNoteTitle] = useState('')
    const [noteBody, setNoteBody] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')
    const [trash, setTrash] = useState([])
    const [archived, setArchived] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = notes.length ? notes[notes.length - 1].id + 1 : 1
        const note = { id, title: noteTitle, body: noteBody }
        const addNote = [...notes, note]
        setNotes(addNote)
        setNoteTitle('')
        setNoteBody('')
        navigate('/')
    }

    const handleDelete = (id) => {
        const note = notes.filter(note => note.id !== id)
        const deletedNote = notes.filter(note => note.id === id)
        const deletedNotes = [...trash, deletedNote[0]]
        setNotes(note)
        setTrash(deletedNotes)
    }
    const handleArchivedDelete = (id) => {
        const archiveNote = archived.filter(note => note.id !== id)
        const deletedNote = archived.filter(note => note.id === id)
        const deletedNotes = [...trash, deletedNote[0]]
        setArchived(archiveNote)
        setTrash(deletedNotes)
    }

    const handlePermanentDelete = (id) => {
        const trashNotes = trash.filter(note => note.id !== id)
        setTrash(trashNotes)
    }

    const handleRecover = (id) => {
        const trashNote = trash.filter(note => note.id !== id)
        const recoveredNote = trash.filter(note => note.id === id)
        const addNote = [...notes, recoveredNote[0]]
        setNotes(addNote)
        setTrash(trashNote)
    }

    const handleArchives = (id) => {
        const note = notes.filter(note => note.id !== id)
        const archiveNote = notes.filter(note => note.id === id)
        const archivedNotes = [...archived, archiveNote[0]]
        setNotes(note)
        setArchived(archivedNotes)
    }

    const handleUnarchive = (id) => {
        const unarchiveNote = archived.filter(note => note.id === id)
        const archivedNotes = archived.filter(note => note.id !== id)
        const addNote = [...notes, unarchiveNote[0]]
        setNotes(addNote)
        setArchived(archivedNotes)
    }

    const handleEditedSubmit = (id) =>{
        const editedNote = {id: parseInt(id), title: editTitle, body: editBody}
        const updatedNote = notes.map(note => (note.id).toString() === id ? {...editedNote} : note)
        setNotes(updatedNote)
        navigate('/')
    }

    return (
        <DataContext.Provider value={{
            notes, setNotes,
            noteTitle, setNoteTitle,
            editTitle, setEditTitle,
            editBody, setEditBody,
            noteBody, setNoteBody,
            handleSubmit, handleDelete,
            trash, archived,
            handleRecover, handleArchives,
            handleArchivedDelete, handleUnarchive,
            handlePermanentDelete, navigate,
            handleEditedSubmit
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext