import {React, useState} from "react";
import {TextField, IconButton, makeStyles} from "@material-ui/core";
import {Search as SearchIcon} from "@material-ui/icons";

// styling
const useStyles = makeStyles((theme) => ({
    searchInput: {
      display: "flex",
      marginRight: 10,
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgba(20, 20, 20)",
        },
        "& input": {
            color: "rgba(29,185, 84)",
            "&:focus": {
              color: "rgba(29, 185, 84)",
            },
            "&::placeholder": {
                color: "rgba(169,169,169)",
            }
          },
        },
      },
    searchButton: {
      "& .MuiIconButton-root": {
        color: "rgba(29, 185, 84)",
        "&:hover": {
            color: "rgba(29, 185, 84xs)",
        }
      },
    },
    searchIcon: {
        color: "rgba(255, 255, 255)",
        "&:hover": {
            color: "rgba(29, 185, 84)",
        }
    }
  }));


function SearchBar({ onSearch}) {
    const classes = useStyles();
    // keywords state
    const [keywords, setKeywords] = useState("");

    // handling input change like if something is typed in the input box
    const handleInputChange = (event) => {
        setKeywords(event.target.value);
    };


    // handling search result
    // const handleSearch = (event) => {
    //     event.preventDefault() // added this line because as soon as I typed a character it was registering each character 
    //     onSearch(keywords);
    // };
    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(keywords);
    };

    
    return (
        // form needs to go here, input and search button
    <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center"}}>
        <TextField variant="outlined" placeholder="Search" value={keywords} onChange={handleInputChange} className={classes.searchInput}/>
    
        <IconButton type="submit" aria-label="search" className={classes.searchButton}>

        <SearchIcon className={classes.searchIcon} style={{fontSize: "40"}}/>

        </IconButton>
    </form>
);
}

export default SearchBar;
