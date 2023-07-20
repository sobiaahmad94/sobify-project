import React, { useState } from "react";
// import api from "../services/api";

// styles
import styled from "styled-components";

const StyledSongBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  padding: 10px;
  margin: 10px 0;
  background-color: rgba(0, 0, 0);
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%; 

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StyledSongInfo = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const StyledTrackName = styled.p`
  color: rgba(255, 255, 255);
`;

const StyledCoverImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 20px;
`;

const StyledMiniAudioPlayer = styled.audio`
  width: 300%;
  margin-top: 10px;
  background-color: rgba(78,134,81);
  color: rgba(255, 255, 255);
  border: none;
  padding: 8px 12px;
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 200, 84);
  }
`;

const StyledAddToPlaylistButton = styled.button`
  margin-right: 10px;
  background-color: rgba(0, 0, 0);
  color: rgb(255, 255, 255);
  border: none;
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid rgba(255, 255,255);
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 185, 84);
  }
`;

const StyledSelect = styled.select`
  background-color: rgba(29,190, 90);
  color: rgba(255, 255, 255);
  border: none;
  padding: 8px 12px;
  border-radius: 10px; 
  cursor: pointer;
  appearance: none;
  margin-top: 10px;
  width: 90%; 
  text-align-last: center; 
  
  margin-right: 20px;

  &:hover {
    background-color: rgba(0, 0, 0);
    color: rgba(29, 185, 84);
  }
`;

function Song({song, playlists, addToPlaylist, addToFavourites}) {

    // state for setting playlist but might move this to SkeletonContainer but seemed relevant to me here

    const [selectedPlaylist, setSelectedPlaylist] = useState("")

    
    // handle playlist changingggg function
    const handlePlaylistChange = (event) => {
        setSelectedPlaylist(event.target.value);
    };


    // handle adding to playlist  
    const handleAddToPlaylist = () => {
        console.log("adding to playlist")
        console.log(selectedPlaylist)
        if (selectedPlaylist && selectedPlaylist !== "") { // checks if the playlist isn't an empty string, means you can't add a song if there's nothing there like no playlists to select
            const playlist = playlists.find((p) => p.name === selectedPlaylist); // searches through playlists array to check if the one chosen is the same as one from the playlists array
            // find() checks to get the first thing in the array that matches
            if (playlist) {
                addToPlaylist(playlist._id, { // gives track name and artist name too
                    trackName: song.trackName,
                    artistName: song.artistName,
                });
            }
        }
    };

    // handle adding to favourites
    const handleAddToFavourites = () => {
    addToFavourites({ 
        trackName: song.trackName,
        artistName: song.artistName, // passes these properties whenever a song's added to favourites
    });
    };

    // display song name and artist name along with cover image
    // audio - would be cool to include this somehow
    // dropdown for playlists
    // put the add to playlist and favourite this song buttons here with the funcs passed as props

    return (
      <div>      
        <StyledSongBox>
        <StyledSongInfo>
        <StyledTrackName className="track-name"><p>{song.trackName}</p></StyledTrackName>
        <p>{song.artistName}</p>
        <StyledCoverImage src={song.artworkUrl100} alt="album cover" controls/>
        <StyledMiniAudioPlayer src={song.previewUrl} alt="preview music mini player" controls/>
        </StyledSongInfo>

        <StyledSelect value={selectedPlaylist} onChange={handlePlaylistChange}>
        <option value="">Please select a playlist</option>
        {playlists.map((playlist) => (
          <option key={playlist._id} value={playlist.name}>
            {playlist.name}
          </option>
        ))}
      </StyledSelect>

        <StyledAddToPlaylistButton onClick={handleAddToPlaylist}>Add To Playlist</StyledAddToPlaylistButton>
        <StyledAddToPlaylistButton  onClick={handleAddToFavourites}>Favourite Song</StyledAddToPlaylistButton>
        </StyledSongBox>
        </div>
)
};


export default Song;