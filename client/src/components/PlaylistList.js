import React, { useState } from "react";
import Comment from "./Comment";
import api from "../services/api";

// styles
import styled from "styled-components";

const StyledDeleteButton = styled.button`
  margin: 10px;
  padding: 10px;
  align-items: center;

  :hover {
    background-color: rgb(243, 61, 61);
  }
`;



function PlaylistList({ playlists, setPlaylists, deletePlaylist, deleteSong }) {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [songs, setSongs] = useState([]);
  const [editPlaylistId, setEditPlaylistId] = useState(null);
  const [editPlaylistName, setEditPlaylistName] = useState("");

  // clicking on playlist name
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
  
  // edit button to update playlist name
  const handleEditPlaylist = (playlistId, playlistName) => {
    setEditPlaylistId(playlistId);
    setEditPlaylistName(playlistName);
  };

  // save the playlist when name has been edited
  const handleSavePlaylist = async (playlistId) => {
    try {
      const response = await api.put(`/playlists/${playlistId}`, { name: editPlaylistName });
      const updatedPlaylist = response.data;
      setEditPlaylistId(null);
  
      // updating the playlist in state that's like local
      setPlaylists((prevPlaylists) =>
        prevPlaylists.map((playlist) =>
          playlist._id === updatedPlaylist._id ? updatedPlaylist : playlist
        )
      );
    } catch (error) {
      console.error("failed to save playlist", error);
    }
  };
  

  const handleCancelEdit = () => {
    setEditPlaylistId(null);
    setEditPlaylistName("");
  };

  const handleEditInputChange = (event) => {
    setEditPlaylistName(event.target.value);
  };

  return (
    <div>
      <h2>Playlists</h2>
      {playlists && playlists.length > 0 ? (
        playlists.map((playlist) => (
          <div key={playlist._id}>
            {!editPlaylistId || editPlaylistId !== playlist._id ? (
              <>
                <h3 onClick={() => handlePlaylistClick(playlist._id)}>{playlist.name}</h3>
                <button onClick={() => deletePlaylist(playlist._id)}>Delete Playlist</button>
                <button onClick={() => handleEditPlaylist(playlist._id, playlist.name)}>Edit Playlist</button>
              </>
            ) : (
              <>
                <input type="text" value={editPlaylistName} onChange={handleEditInputChange}/>
                <button onClick={() => handleSavePlaylist(playlist._id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            )}
            {/* songs shown from the playlist*/}
            <h4>Songs:</h4>
            {selectedPlaylist === playlist._id && (
              <ul>{playlist.songs.map((song) => (
                  <li key={song._id}>
                    {song.trackName} - {song.artistName}
                    <StyledDeleteButton className="delete-button" onClick={() => deleteSong(playlist._id, song._id)}>Delete Song</StyledDeleteButton>
                    <Comment songId={song._id}/>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      ) : (
        <div>No playlists available</div>
      )}
    </div>
  );
}

export default PlaylistList;
