// React 
import React, { useState } from 'react';
// style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export function Search({resorts, setResorts, store}) {
    const [searchValue, setSearchValue] = useState(""); // search input use state
    // a callback to get search input
    const handleChange = event => {
      setSearchValue(event.target.value)
    };
  
    // a callback to filter the result
    const search = (searchValue) => {
      let data = resorts.filter(resortName =>
        resortName.resort_name.toLowerCase().includes(searchValue.toLowerCase())
      )
      setResorts(data); // set that result to resorts 
    }
  
    // a callback to handle search 
    const handleSearch = (event) => {
      event.preventDefault();
      resorts = store;
      search(searchValue);
    }
  
    return (
      <form className="location" onSubmit={handleSearch}>
        <label htmlFor="resort"></label>
        <input className="searchInput" id="resort" type="text" placeholder="Resort Name.." name="search" aria-label="resort name"
          value={searchValue}
          onChange={handleChange}>
        </input>
        <button className="searchButton" type="submit" aria-label="Search"><FontAwesomeIcon icon={faSearch} aria-label="Search" /></button>
      </form>
    )
  }