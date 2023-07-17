import React, {useState, useEffect} from "react";


import HeaderSearchNavContainer from "./HeaderSearchNavContainer";
import SearchResults from "./SearchResults";
import SideBarContainer from "./SideBarContainer";
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
    const fetchFavourites = async () => {
        try {
            const response = await api.get("/favourites");
            setFavourites(response.data);
        } catch (error) {
            console.error("failed to fetch the favourites", error);
        }
    };

// handling search func
    const handleSearch = async (keywords) => {
        try {
            const response = await api.get(`https://itunes.apple.com/search?term=${keywords}`);
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
          await api.post("/favourites/songs", song);
          console.log("the song has been added to favourites");
          fetchFavourites(); // fetching the updated list of favourites after adding a song on the thing
        } catch (error) {
          console.error("failed to add the song to favourites", error);
        }
      };

//     const createPlaylist = async (name) => {
//         try {
//         const response = await api.post("/playlists", { name });
//       // checking if it's working
//             console.log("the playlist has been created, woooo", response.data);
//         fetchPlaylists(); // if I put this function here it'll hopefully refresh the playlists everytime you try to create a new playlist
//         } catch (error) {
//             console.error("oh no, failed to create the playlist", error);
//     }
//   };
  
    // function to delete the playlist
    const deletePlaylist = async (playlistId) => {
        try {
            await api.delete(`/playlists/${playlistId}`);
            // checking if it's working
            console.log("the playlist has been deleted", playlistId);
            fetchPlaylists(); // this will be called to make it refresh whenever a song is deleted
        } catch(error) {
            console.error("oh no, failed to delete the playlist", error);
        }
    };

    // function to delete the song
    const deleteSong = async (playlistId, songId) => {
        try {
            await api.delete(`/playlists/${playlistId}/songs/${songId}`);
        // checks if it's working
        console.log("the song has been deleted", songId);
        fetchPlaylists(); // this refreshes the playlists whenever a song is deleted
    } catch (error) {
        console.error("oh mate, failed to delete song", error);
    }
};
    
    // function to remove out of favourites
    const removeFromFavourites = async (songId) => {
        try {
            await api.delete(`/favourites/songs/${songId}`);
            // checking if it's working
            console.log("the song has been removed from favourites", songId);
            fetchFavourites(); // this will refresh the playlists whenever a song is deleted
        } catch (error) {
            console.error("oh no, failed to remove song from favourites", error);
        }
    };
    

    return (
        // changed the flow of my components a wee bit as I started building, I had to make some tweaks
        // order: SearchBar, Song, CreatePlaylistList, PlaylistList, FavouritePlaylist (will add the other components in my tree around these later)
        <div>
        {/* <NavBarContainer /> or HeaderNavContainer which will contain SearchBar and NavBar */}
            {/* <NavBar />
            <SearchBar onSearch={handleSearch}/> */}

            <HeaderSearchNavContainer onSearch={handleSearch}/>

            <SearchResults searchResults={searchResults} playlists={playlists} addToPlaylist={addToPlaylist} addToFavourites={addToFavourites}/>

            {/* <SiderBarContainer /> should contain CreatePlaylist, PlaylistList and FavouritePlaylist */}

            {/* <CreatePlaylist onCreate={createPlaylist}/>

            <PlaylistList playlists={playlists} deletePlaylist={deletePlaylist} deleteSong={deleteSong}/>

            <FavouritePlaylist favourites={favourites} removeFromFavourites={removeFromFavourites}/> */}

            <SideBarContainer playlists={playlists} deletePlaylist={deletePlaylist} deleteSong={deleteSong} favourites={favourites} removeFromFavourites={removeFromFavourites}/>

            {/* MusicPlayerContainer will go here which will contain the Spotify SDK */}    
        </div>
    );
};


export default SkeletonContainer;