import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { HiOutlineXMark } from 'react-icons/hi2'

const SearchNote = () => {
  const { search, setSearch } = useContext(DataContext)
  return (
    <form
      className="search-form"
      onSubmit={e => e.preventDefault()}
    >
      <button
        className="search"
      >
        🔍
      </button>
      <input
        type="text"
        className='search-input'
        placeholder='Search Notes'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {
        search &&
        <button
          className="search-button"
          onClick={() => setSearch('')}
        >
          <HiOutlineXMark />
        </button>
      }
    </form>
  )
}

export default SearchNote