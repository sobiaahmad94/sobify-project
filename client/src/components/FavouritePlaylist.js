import React from "react";

function FavouritePlaylist({favourites, removeFromFavourites}) {
    return (
        //  remove button
        <div>
      <h2>Favourites:</h2>
      {favourites.map((song) => (
        <div key={song._id}>
          <p>{song.trackName}</p>
          <button onClick={() => removeFromFavourites(song._id)}>Remove From Favourites</button>
        </div>
      ))}
    </div>
  );
}

export default FavouritePlaylist;