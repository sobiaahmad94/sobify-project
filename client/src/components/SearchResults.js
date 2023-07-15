import React from "react";
import Song from "./Song";

function SearchResults({ searchResults, playlists, addToPlaylist, addToFavourites }) {
  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.map((song, index) => (
        <Song
          key={`${song.trackId}-${index}`} // assigning a unique key to each Song 
          song={song}
          playlists={playlists}
          addToPlaylist={addToPlaylist}
          addToFavourites={addToFavourites}
        />
      ))}
    </div>
  );
}

export default SearchResults;
