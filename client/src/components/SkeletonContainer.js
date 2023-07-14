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
}

    // function to fetch favourites 
    const fetchFavourites= async () => {
        try {
            const response = await api.get("/favourites");
            setFavourites(response.data);
        } catch (error) {
            console.error("failed to fetch the favourites", error);
        }
    };


    // function to handleSearch
    const handleSearch = async (keywords) => {
        try {
            const response = await api.get(`/search?keywords=${keywords}`);
            setSearchResults(response.data.results);
        } catch (error) {
            console.error("failed to properly search the songs", error);
        }
    };


    // function to add to playlist
    const addToPlaylist = async (playlistId, song) => {
        try {
            const response = await api.post(`/playlists/${playlistId}/songs`, song);
            // see if it's working
            console.log("song added to the playlist, woooooo", response.data);
        } catch (error) {
            console.error("oh no, failed to add the song to the playlist", error);
        }
    };


    const addToFavourites = async (song) => {
        try {
            const response = await api.post("/favourites/songs", song);
            // checking if it's working
            console.log("that class song has been added to favourites", response.data);
        } catch (error) {
            console.error("failed to add the song to favourites", error);
        }
    };

    
    // function to create playlist
    const createPlaylist = async (name) => {
        try {
          const response = await api.post('/playlists', { name });
          // checking if it's working
          console.log("the playlist has been created, woooo", response.data);
          fetchPlaylists(); // if I put this function here it'll hopefully refresh the playlists everytime you try to create a new playlist
        } catch (error) {
          console.error("oh no, failed to create the playlist", error);
        }
      };


    // function to delete the playlist
    const deletePlaylist = async (playlistId) => {
        try {
            await api.delete(`/playlists/${playlistId}`);
            // checking if it's working
            console.log("the playlist has been deleted, playlistId");
            fetchPlaylist(); // this will be called to make it refresh whenever a song is deleted
        } catch(error) {
            console.error("oh no, failed to delete the playlist", error);
        }
    };

    
    // function to delete the song

    // function to remove out of favourites


    
    
    
    

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

export default SkeletonContainer;