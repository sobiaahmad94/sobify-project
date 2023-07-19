import React from "react";
import {Route} from "react-router-dom";

import FavouritePlaylist from "./FavouritePlaylist";
import PlaylistList from "./PlaylistList";
import CreatePlaylist from "./CreatePlaylist";
import TimeMachineRandomiser from "./TimeMachineRandomiser";

function Routes() {
    return (
        <div>
        <Route exact path="/favourites" component={FavouritePlaylist}/>
        <Route exacr path="/playlists" component={PlaylistList}/>
        <Route exact path="/create" component={CreatePlaylist}/>
        <Route exact path="song-time-machine" comment={TimeMachineRandomiser}/>
        </div>
    );
};

export default Routes;