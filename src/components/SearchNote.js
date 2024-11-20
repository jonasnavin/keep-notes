import React from 'react'
import { GoSearch } from 'react-icons/go'

const SearchNote = () => {
  return (
    <form
      className="search-form"
      onSubmit={e => e.preventDefault()}
    >
      <input
        type="text"
        className='search-input'
        placeholder='🔍 Search Notes'
      />
      <button className="search-button">
        <GoSearch />
      </button>
    </form>
  )
}

export default SearchNote