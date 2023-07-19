import React from "react";
import {Route} from "react-router-dom";

import FavouritePlaylist from "./FavouritePlaylist";
import PlaylistList from "./PlaylistList";
import CreatePlaylist from "./CreatePlaylist";

function Routes() {
    return (
        <div>
        <Route exact path="/favourites" component={FavouritePlaylist}/>
        <Route exacr path="/playlists" component={PlaylistList}/>
        <Route exact path="/create" component={CreatePlaylist}/>
        </div>
    );
};

export default Routes;