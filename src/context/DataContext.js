import { format } from "date-fns";
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
    const [activeSection, setActiveSection] = useState('home')
    const [menu, setMenu] = useState(false)

    const toggleSidebar = () => {
        setMenu(prevState => !prevState)
        console.log(menu)
    }

    const handleClick = (message) => {
        setActiveSection(message)
    }

    const handleSubmit = (e) => {
        const dateTime = format(new Date(),'d MMM, yyyy p')
        e.preventDefault()
        if (noteTitle && noteBody) {
            const id = Math.random() * 10
            const note = { id, title: noteTitle, body: noteBody, dateTime: dateTime }
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
        const dateTime = format(new Date(), 'd MMM, yyyy p')
        const editedNote = { id: parseFloat(id), title: editTitle, body: editBody, dateTime: dateTime }
        const updatedNote = notes.map(note => (note.id).toString() === id ? { ...editedNote } : note)
        setNotes(updatedNote)
        navigate('/')
        localStorage.setItem('notes', JSON.stringify(updatedNote))
    }

    const handleCancel = () => {
        setNotes(notes)
        navigate('/')
        localStorage.setItem('notes', JSON.stringify(notes))
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
            trash, archived, menu, toggleSidebar,
            handleRestore, handleArchives,
            handleArchivedDelete, handleUnarchive,
            handlePermanentDelete, navigate,
            handleEditedSubmit, handleCancel,
            activeSection, setActiveSection,
            handleClick
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext