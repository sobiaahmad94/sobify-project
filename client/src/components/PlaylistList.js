import React, { useState } from "react";
import api from "../services/api";

function PlaylistList({ playlists, deletePlaylist, deleteSong }) {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const[songs, setSongs] = useState([]);

  const handlePlaylistClick = async (playlistId) => {
    if (selectedPlaylist === playlistId) {
      setSelectedPlaylist(null);
    } else {
      try {
        const response = await api.get(`/playlists/${playlistId}/songs`);
        setSelectedPlaylist(playlistId);
        setSongs(response.data);
      } catch (error) {
        console.error("failed to fetch playlist songs", error);
      }
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
