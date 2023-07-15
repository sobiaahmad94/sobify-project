import React from "react";

import CreatePlaylist from "./CreatePlaylist";
import PlaylistList from "./PlaylistList";
import FavouritePlaylist from "./FavouritePlaylist";

// pass in my props to refactor so CreatePlaylist, PlaylistList, FavouritePlaylist are all inside SideBarContainer
function SideBarContainer({playlists, deletePlaylist, deleteSong, favourites, removeFromFavourites, createPlaylist}) {
    return (
        <div>
            <CreeatePlaylist onCreate={createPlaylist}/>
            <PlaylistList playlists={playlists} deletePlaylist={deletePlaylist} deleteSong={deleteSong}/>
            <FavouritePlaylist favourites={favourites} removeFromFavourites={removeFromFavourites}/>
            
        </div>
    );
};

export default SideBarContainer;