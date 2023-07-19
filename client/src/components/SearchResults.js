import React from "react";
import Song from "./Song";
// import Comment from "./Comment"; 

function SearchResults({ searchResults, playlists, addToPlaylist, addToFavourites }) {
  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.map((song, index) => (
        <div key={`${song.songId}-${index}`}>
          <Song song={song} playlists={playlists} addToPlaylist={addToPlaylist} addToFavourites={addToFavourites}/>
          {/* <Comment songId={song.songId}/>  */}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
