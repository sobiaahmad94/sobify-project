import React, {useState} from "react";
import api from "../services/api";

// styles
import styled from "styled-components";

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
`;

const StyledCreatePlaylist = styled.div`
  display: flex;
  align-items: center; 
  margin-bottom: 20px; 

  h2 {
    margin-right: 20px; 
  }

  input {
    margin-right: 10px; 
  }
`;

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
        <StyledPageContainer>
        <StyledCreatePlaylist>
          <h2>Create Playlist</h2>
            <input type="text" value={name} onChange={handleInputChange}/>
            <button onClick={handleCreate}>Create</button>
            
        </StyledCreatePlaylist>
        </StyledPageContainer>
    );
}

export default CreatePlaylist;
