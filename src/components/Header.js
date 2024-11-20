import React from 'react'
import SearchNote from './SearchNote'
import { BiSolidAddToQueue } from 'react-icons/bi'
import { MdArchive, MdHome } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <h1>Keep Notes</h1>
            <SearchNote />
            <Link to='/'>
                <button className="home">
                    <MdHome /> Home
                </button>
            </Link>
            <Link to='/add-note'>
                <button className='add-button'>
                    <BiSolidAddToQueue /> Add
                </button>
            </Link>
            <Link to='/archived-notes'>
                <button className='archive-button'>
                    <MdArchive /> Archived
                </button>
            </Link>
            <Link to='/trash'>
                <button className="delete-button">
                    <FaTrash /> Trash
                </button>
            </Link>
        </header>
    )
}

export default Header