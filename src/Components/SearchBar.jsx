import React from 'react'

export default function SearchBar() {
  return (
    <form className="d-flex" role="search">
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      // onChange={handleChaonge}
    />
    </form>
  )
}
