import React from "react";
import Song from "./Song";
// import Comment from "./Comment"; 

// styles
import styled from "styled-components";

const StyledSearchResultsContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center; 
width: 60%; 
/* center */
margin: 0 auto; 
/* moves it to the right */
margin-right: 5%; 

@media (max-width: 768px) {
  /* tried to make it responsive-ish */
    margin-right: 0; 
    width: 100%;
  }
`;

const StyledSearchResultsBox = styled.div`
  width: 100%;
`;

function SearchResults({ searchResults, playlists, addToPlaylist, addToFavourites }) {
  return (
    <StyledSearchResultsContainer>
    <StyledSearchResultsBox>
      <h1>Search Results</h1>
      {searchResults.map((song, index) => (
        <div key={`${song.songId}-${index}`}>
          <Song song={song} playlists={playlists} addToPlaylist={addToPlaylist} addToFavourites={addToFavourites}/>
          {/* <Comment songId={song.songId}/>  */}
        </div>
      ))}
    </StyledSearchResultsBox>
    </StyledSearchResultsContainer>
  );
}

export default SearchResults;
