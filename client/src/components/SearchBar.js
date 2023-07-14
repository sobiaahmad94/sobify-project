import {React, useState} from "react";

function SearchBar({ onSearch}) {
    // keywords state
    const [keywords, setKeywords] = useState("");

    // handling input change like if something is typed in the input box
    const handleInputChange = (event) => {
        setKeywords(event.target.value);
    };


    // handling search result
    const handleSearch = (event) => {
        event.preventDefault() // added this line because as soon as I typed a character it was registering each character 
        onSearch(keywords);
    };

    
    return (
        // form needs to go here, input and search button
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={keywords} onChange={handleInputChange}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;