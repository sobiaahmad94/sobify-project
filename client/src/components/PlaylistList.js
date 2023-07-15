import React from "react";

function PlaylistList({ playlists, deletePlaylist, deleteSong}) {
    return (
      <div>
      <h2>Playlists</h2>
      {playlists.map((playlist) => (
        <div key={playlist._id}>
          <h3>{playlist.name}</h3>
          <button onClick={() => deletePlaylist(playlist._id)}>Delete Playlist</button>
          <h4>Songs:</h4>
          {playlist.songs.map((song) => (
            <div key={song._id}>
              <p>{song.trackName}</p>
              <button onClick={() => deleteSong(playlist._id, song._id)}>Delete Song</button>
            </div>
          ))}
        </div>
      ))}
    </div>
    );
  }
  
  export default PlaylistList;