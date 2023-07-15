import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";


function HeaderNavContainer({handleSearch}) {
    return (
        // will contain SearchBar and NavBar containers (SearchBar in the middle and NavBar to the right makes sense, I think)
        <div>
        <SearchBar onSearch={handleSearch}/>
        <NavBar />
        </div>
    );
}

export default HeaderNavContainer;