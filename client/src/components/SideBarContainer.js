import React from "react";
import CreatePlaylist from "./CreatePlaylist";
import PlaylistList from "./PlaylistList";
import FavouritePlaylist from "./FavouritePlaylist";
import TimeMachineRandomiser from "./TimeMachineRandomiser";
import Comment from "./Comment";

// styles
// import styled from "styled-components";

// const StyledPageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start; /* Align the content to the left side */
// `;

// const StyledMainContainer = styled.div`
//   display: flex;
//   width: 100%;
// `;

// const StyledSideBarContainer = styled.div`
//   margin-right: 20px; /* Add some space between the SideBarContainer and SearchResults */
// `;

function SideBarContainer({playlists, deletePlaylist, deleteSong, favourites, removeFromFavourites, createPlaylist}) {
  return (
    <div>
      <CreatePlaylist onCreate={createPlaylist}/>
      <PlaylistList playlists={playlists} deletePlaylist={deletePlaylist} deleteSong={deleteSong}/>
      <FavouritePlaylist favourites={favourites} removeFromFavourites={removeFromFavourites}/>
      <TimeMachineRandomiser/>
    </div>
    
  );
}

export default SideBarContainer;
