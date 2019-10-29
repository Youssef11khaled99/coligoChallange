import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.css';

const Search = () => {
    return(
        <div>
            <form className="searchFrom">
                <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                <span><input type="text" className="search" placeholder="Search..."/></span>
            </form>
        </div>
    );
}

export default Search;