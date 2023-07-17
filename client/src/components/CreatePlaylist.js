import React, {useState} from "react";
import api from "../services/api";

function CreatePlaylist({onCreate}) {
    // playlist name state
    const [name, setName] = useState("");

    // function that handles input change
    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    // function that handles playlist being created
    const handleCreate = async () => {
        try {
          if (name && name.trim() !== "") {
            const response = await api.post("/playlists", { name }); // sending the name in the request body thing
            onCreate(response.data);
            setName("");
          }
        } catch (error) {
          console.error("failed to create playlist", error);
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
