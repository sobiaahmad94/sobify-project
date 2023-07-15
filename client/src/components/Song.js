import React from "react";

function Song({song, playlists, addToPlaylist, addToFavourites, selectedPlaylist, setSelectedPlaylist}) {

    // state for setting playlist but might move this to SkeletonContainer but seemed relevant to me here

    // handle playlist changingggg function
    const handlePlaylistChange = (event) => {
        setSelectedPlaylist(event.target.value);
    };


    // handle adding to playlist
    const handleAddToPlaylist = () => {
        if (selectedPlaylist && selectedPlaylist !== "") { // checks if the playlist isn't an empty string, means you can't add a song if there's nothing there like no playlists to select
            const playlist = playlists.find((p) => p._id === selectedPlaylist); // searches through playlists array to check if the one chosen is the same as one from the playlists array
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
        <p>{song.trackName}</p>
        <p>{song.artistName}</p>
        <img src={song.artworkUrl100} alt="album cover" controls/>
        <audio src={song.previewUrl} alt="preview music mini player" controls/>

        <select value={selectedPlaylist} onChange={handlePlaylistChange}>
        <option value="">Please select a playlist</option>
        {playlists.map((playlist) => (
          <option key={playlist._id} value={playlist._id}>
            {playlist.name}
          </option>
        ))}
      </select>
        <button onClick={handleAddToPlaylist}>Add To Playlist</button>
        <button onClick={handleAddToFavourites}>Favourite This Song</button>
        </div>
)
};


export default Song;