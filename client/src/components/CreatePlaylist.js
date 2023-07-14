import {React, useState} from "react";

function CreatePlaylist({onCreate}) {
    // playlist name state
    const [name, setName] = useState("");

    // function that handles input change
    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    // function that handles playlist being created
    const handleCreate = () => {
        if (name && name.trim() !== "") {
            onCreate(name);
            setName("");
        }
    };

    return (
        //input field and create button with props
        <div>
            <input type="text" value={name} onChange={handleInputChange}/>
            <button onClick={handleCreate}>Create Playlist</button>
            
        </div>
    );
}

export default CreatePlaylist;