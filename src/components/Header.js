import React from 'react'
import SearchNote from './SearchNote'
import { BiSolidAddToQueue } from 'react-icons/bi'
import { MdArchive, MdHome } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <h2>Keep Notes</h2>
            </Link>
            <SearchNote />
            <Link to='/'>
                <button className="nav-button">
                    <MdHome /> Home
                </button>
            </Link>
            <Link to='/add-note'>
                <button className='nav-button'>
                    <BiSolidAddToQueue /> Add
                </button>
            </Link>
            <Link to='/archived-notes'>
                <button className='nav-button'>
                    <MdArchive /> Archived
                </button>
            </Link>
            <Link to='/trash'>
                <button className="nav-button">
                    <FaTrash /> Trash
                </button>
            </Link>
        </header>
    )
}

export default Header