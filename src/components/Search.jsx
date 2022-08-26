import React from "react";
import '../App.css'
import '../components-style/Search.css'

const Search = () => {
    return(
        <div className="conatiner-search">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Search chats" />
                <button type="submit" className="searchButton" />
            </div>
        </div>
    )
}

export default Search;