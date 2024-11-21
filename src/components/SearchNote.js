import React, { useContext } from 'react'
import { GoSearch } from 'react-icons/go'
import DataContext from '../context/DataContext'

const SearchNote = () => {
  const {search, setSearch} = useContext(DataContext)
  return (
    <form
      className="search-form"
      onSubmit={e => e.preventDefault()}
    >
      <input
        type="text"
        className='search-input'
        placeholder='🔍 Search Notes'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button
      className="search-button"
      onClick={() => setSearch('')}
      >
        <GoSearch />
      </button>
    </form>
  )
}

export default SearchNote