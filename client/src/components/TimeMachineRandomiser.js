import React, { useState } from "react";
import songsByYearData from "./seeds.js"; // this has all the yearly top hits json stuff

//styles
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 10px;
  padding: 10px;
  align-items: center;
`;

const TimeMachineRandomiser = () => {
  const [year, setYear] = useState("");
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");

  const handleYearChange = (event) => {
setYear(event.target.value);
  };

  const handleRandomise = () => {
    const selectedSong = songsByYearData.find((item) => item.year === Number(year));

    if (selectedSong) {
      setSong(selectedSong.song);
      setArtist(selectedSong.artist)
    } else {
      setSong("No song found for that year, please enter another year :)");
      setArtist("");
    }
  };

  return (
    <div>
      <h2>Song Time Machine</h2>
      <label>Please enter a year: <input type="number" value={year} onChange={handleYearChange} />
      </label><StyledButton onClick={handleRandomise}>Find</StyledButton>

      {song && ( <p>Selected Song: "{song}" by {artist } which was out in {year}</p>)}
      
    </div>
);
};

export default TimeMachineRandomiser;

