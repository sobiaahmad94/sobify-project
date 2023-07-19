import React from "react";
import Song from "./Song";
// import Comment from "./Comment"; 

// styles
import styled from "styled-components";

const StyledSearchResultsContainer = styled.div`
  display: flex;
  justify-content: center; 
  width: 60%; 
  margin: 0 auto;

  @media (max-width: 768px) {
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
