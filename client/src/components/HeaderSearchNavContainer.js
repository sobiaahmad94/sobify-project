import React from "react";

import NavBar from "./NavBar";
import SearchBar
 from "./SearchBar";

function HeaderSearchNavContainer({onSearch}) {
    return (
        <div>
        <NavBar />
        <SearchBar onSearch={onSearch}/>
            
        </div>
    );
}

export default HeaderSearchNavContainer;