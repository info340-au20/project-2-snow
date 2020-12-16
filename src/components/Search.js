// React 
import React, { useState } from 'react';
// style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export function Search({resorts, setResorts, store}) {
    const [searchValue, setSearchValue] = useState("");
  
    const handleChange = event => {
      setSearchValue(event.target.value)
    };
  
    const search = (searchValue) => {
      let data = resorts.filter(resortName =>
        resortName.resort_name.toLowerCase().includes(searchValue.toLowerCase())
      )
      setResorts(data);
    }
  
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
        <button className="searchButton" type="submit" aria-label="Search"><FontAwesomeIcon icon={faSearch} /></button>
      </form>
    )
  }