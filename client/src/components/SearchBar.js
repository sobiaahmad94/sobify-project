import {React, useState} from "react";

// material UI styles
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
            color: "rgba(29, 185, 84)",
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
    // state for loading
    const [loading, setLoading] = useState(false);

// handling input change like if something is typed in the input box
  const handleInputChange = (event) => {
    setKeywords(event.target.value);
  };


// handling search result
  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    await onSearch(keywords);
    // resetting the loading after the results have loaded
    setLoading(false); 
    // the input is an empty string again
    setKeywords(""); 
  };

  return (
    <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center"}}>
      <TextField variant="outlined" placeholder="Search" value={keywords} onChange={handleInputChange} className={classes.searchInput} disabled={loading}/> 
      <IconButton type="submit" aria-label="search" className={classes.searchButton}>
        <SearchIcon className={classes.searchIcon} style={{fontSize: "40"}}/>
      </IconButton>
      {loading && <span>Loading some tunes for you...</span>}
    </form>
  );
}

export default SearchBar;

