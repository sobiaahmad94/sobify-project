import React, { useState } from "react";

function PlaylistList({ playlists, deletePlaylist, deleteSong }) {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const handlePlaylistClick = (playlistId) => {
    if (selectedPlaylist === playlistId) {
      setSelectedPlaylist(null); // stops selecting it if it's already selected
    } else {
      setSelectedPlaylist(playlistId); // selects the clicked playlist which is what I want
    }
  };

  return (
    <div>
      <h2>Playlists</h2>
      {playlists.map((playlist) => (
        <div key={playlist._id}>
          <h3 onClick={() => handlePlaylistClick(playlist._id)}>
            {playlist.name}
          </h3>
          <button onClick={() => deletePlaylist(playlist._id)}>
            Delete Playlist
          </button>
          <h4>Songs:</h4>
          {selectedPlaylist === playlist._id && (
            <ul>
              {playlist.songs.map((song) => (
                <li key={song._id}>
                  {song.trackName} - {song.artistName}
                  <button
                    onClick={() => deleteSong(playlist._id, song._id)}
                  >
                    Delete Song
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default PlaylistList;

