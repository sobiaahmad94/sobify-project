import React from 'react';

function SkeletonContainer() {
    return (
        // order: SearchBar, Song, CreatePlaylistList, PlaylistList, FavouritePlaylist (will add the other components in my tree around these later)
        <div>
            <SearchBar />

            <Song />

            <CreatePlaylist />

            <PlaylistList />

            <FavouritePlaylist />

        
            
        </div>
    );
}

export default SkeletonContainer;