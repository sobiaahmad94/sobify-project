import React from "react";
import CreatePlaylist from "./CreatePlaylist";
import PlaylistList from "./PlaylistList";
import FavouritePlaylist from "./FavouritePlaylist";

function SideBarContainer({playlists, deletePlaylist, deleteSong, favourites, removeFromFavourites, createPlaylist}) {
  return (
    <div>
      <CreatePlaylist onCreate={createPlaylist} />
      <PlaylistList playlists={playlists} deletePlaylist={deletePlaylist} deleteSong={deleteSong} />
      <FavouritePlaylist favourites={favourites} removeFromFavourites={removeFromFavourites} />
    </div>
  );
}

export default SideBarContainer;
