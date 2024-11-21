import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

    const [noteTitle, setNoteTitle] = useState('')
    const [noteBody, setNoteBody] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')
    const [search, setSearch] = useState('')
    const [trash, setTrash] = useState(JSON.parse(localStorage.getItem('deleted')) || [])
    const [archived, setArchived] = useState(JSON.parse(localStorage.getItem('archived')) || [])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (noteTitle && noteBody){
            const id = Math.random() * 10
            const note = { id, title: noteTitle, body: noteBody }
            const addNote = [...notes, note]
            setNotes(addNote)
            localStorage.setItem('notes', JSON.stringify(addNote))
            setNoteTitle('')
            setNoteBody('')
            navigate('/')
        }
    }

    const handleDelete = (id) => {
        const note = notes.filter(note => note.id !== id)
        const deletedNote = notes.filter(note => note.id === id)
        const deletedNotes = [...trash, deletedNote[0]]
        setNotes(note)
        setTrash(deletedNotes)
        navigate('/')
        localStorage.setItem('notes', JSON.stringify(note))
        localStorage.setItem('deleted', JSON.stringify(deletedNotes))
    }
    const handleArchivedDelete = (id) => {
        const archivedNote = archived.filter(note => note.id !== id)
        const deletedNote = archived.filter(note => note.id === id)
        const deletedNotes = [...trash, deletedNote[0]]
        setArchived(archivedNote)
        setTrash(deletedNotes)
        localStorage.setItem('deleted', JSON.stringify(deletedNotes))
        localStorage.setItem('archived', JSON.stringify(archivedNote))
    }

    const handlePermanentDelete = (id) => {
        const trashNotes = trash.filter(note => note.id !== id)
        setTrash(trashNotes)
        localStorage.setItem('deleted', JSON.stringify(trashNotes))
    }

    const handleRestore = (id) => {
        const trashNote = trash.filter(note => note.id !== id)
        const restoredNote = trash.filter(note => note.id === id)
        const addNote = [...notes, restoredNote[0]]
        setNotes(addNote)
        setTrash(trashNote)
        localStorage.setItem('notes', JSON.stringify(addNote))
        localStorage.setItem('deleted', JSON.stringify(trashNote))
    }

    const handleArchives = (id) => {
        const note = notes.filter(note => note.id !== id)
        const archiveNote = notes.filter(note => note.id === id)
        const archivedNotes = [...archived, archiveNote[0]]
        setNotes(note)
        setArchived(archivedNotes)
        navigate('/')
        localStorage.setItem('notes', JSON.stringify(note))
        localStorage.setItem('archived', JSON.stringify(archivedNotes))
    }

    const handleUnarchive = (id) => {
        const unarchiveNote = archived.filter(note => note.id === id)
        const archivedNotes = archived.filter(note => note.id !== id)
        const addNote = [...notes, unarchiveNote[0]]
        setNotes(addNote)
        setArchived(archivedNotes)
        localStorage.setItem('notes', JSON.stringify(addNote))
        localStorage.setItem('archived', JSON.stringify(archivedNotes))
    }

    const handleEditedSubmit = (id) => {
        const editedNote = { id: parseFloat(id), title: editTitle, body: editBody }
        const updatedNote = notes.map(note => (note.id).toString() === id ? { ...editedNote } : note)
        setNotes(updatedNote)
        navigate('/')
        localStorage.setItem('notes', JSON.stringify(updatedNote))
    }

    return (
        <DataContext.Provider value={{
            notes, setNotes,
            noteTitle, setNoteTitle,
            editTitle, setEditTitle,
            editBody, setEditBody,
            noteBody, setNoteBody,
            search, setSearch,
            handleSubmit, handleDelete,
            trash, archived,
            handleRestore, handleArchives,
            handleArchivedDelete, handleUnarchive,
            handlePermanentDelete, navigate,
            handleEditedSubmit
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext