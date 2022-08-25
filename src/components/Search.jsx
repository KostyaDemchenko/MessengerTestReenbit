import React from "react";
import '../App.css'
import '../components-style/Search.css'

const Search = () => {
    return(
        <div className="conatiner-search">
            <div class="search">
                <input type="text" className="searchTerm" placeholder="Search chats" />
                <button type="submit" className="searchButton">
                </button>
            </div>
        </div>
    )
}

export default Search;