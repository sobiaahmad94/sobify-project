import {React, useState, useEffect} from 'react';

import SearchBar from './SearchBar';
import Song from './Song';
import CreatePlaylist from './CreatePlaylist';
import PlaylistList from './PlaylistList';
import FavouritePlaylist from './FavouritePlaylist';
import api from "../services/api";

function SkeletonContainer() {
    // searchResults state
    const [searchResults, setSearchResults] = useState([]);
    // playlists state
    const [playlists, setPlaylists] = useState([]);
    // favourites state
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        fetchPlaylists();
        fetchFavourites();
    }, []); // only calls when it's rendered cause of the empty array

    // function to fetch playlists
    const fetchPlaylists = async () => {
        try {
            const response = await api.get("/playlists");
            setPlaylists(response.data);
        } catch (error) {
            console.error("failed to fetch the playlists, oops", error);
        }
    };

    // function to fetch favourites 
    const fetchFavourites= async () => {
        try {
            const response = await api.get("/favourites");
            setFavourites(response.data);
        } catch (error) {
            console.error("failed to fetch the favourites", error);
        }

        }
    }

    return (
        // order: SearchBar, Song, CreatePlaylistList, PlaylistList, FavouritePlaylist (will add the other components in my tree around these later)
        <div>
        {/* <NavBarContainer /> which will contain SearchBar and NavBar */}
            <SearchBar onSearch={handleSearch}/>

            <h1>Search Results</h1> {/* maybe this should go in a component */}
            {searchResults.map((song) => (
                <Song key={song.trackId} song={song} playlists={playlists} addToPlaylist={addToPlaylist} addToFavourites={addToFavourites} />
            ))}

            {/* <SiderBarContainer /> should contain CreatePlaylist, PlaylistList and FavouritePlaylist */}

            <CreatePlaylist onCreate={createPlaylist}/>

            <PlaylistList playlists={playlists} deletePlaylist={deletePlaylist} deleteSong={deleteSong}/>

            <FavouritePlaylist favourites={favourites} removeFromFavourites={removeFromFavourites}/>

            {/* MusicPlayerContainer will go here which will contain the Spotify SDK */}    
        </div>
    );
}

export default SkeletonContainer;