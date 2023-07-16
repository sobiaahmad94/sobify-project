import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
 

function HeaderSearchNavContainer({onSearch}) {
    return (
        <div>
        <Router>
            <NavBar onSearch={onSearch}/>
            {/* <SearchBar onSearch={onSearch}/> I moved this inside the NavBar component*/}
        </Router>
            
        </div>
    );
}

export default HeaderSearchNavContainer;