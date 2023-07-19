// import React, { useState } from "react";
// import songsByYear from "./seeds.js";


// const TimeMachineRandomiser = ({ songsByYear }) => {
//   const [year, setYear] = useState("");
//   const [song, setSong] = useState("");

//   const handleYearChange = (event) => {
//     setYear(event.target.value);
//   };

//   const handleRandomise = () => {
//     const selectedSong = songsByYear.find((item) => item.year === Number(year));

//     if (selectedSong) {
//       setSong(selectedSong.song);
//     } else {
//       setSong("No song found for that year, please enter anothet year :)");
//     }
//   };

//   return (
//     <div>
//       <h2>Song Time Machine</h2>
//       <label>
//         Pleas enter a year:
//         <input type="number" value={year} onChange={handleYearChange} />
//       </label>
//       <button onClick={handleRandomise}>Randomise</button>
//       {song && <p>Selected Song: {song}</p>}
//     </div>
//   );
// };

// export default TimeMachineRandomiser;

import React, { useState } from "react";
import songsByYearData from "./seeds.js";

const TimeMachineRandomiser = () => {
  const [year, setYear] = useState("");
  const [song, setSong] = useState("");

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleRandomise = () => {
    const selectedSong = songsByYearData.find((item) => item.year === Number(year));

    if (selectedSong) {
      setSong(selectedSong.song);
    } else {
      setSong("No song found for that year, please enter another year :)");
    }
  };

  return (
    <div>
      <h2>Song Time Machine</h2>
      <label>
        Please enter a year:
        <input type="number" value={year} onChange={handleYearChange} />
      </label>
      <button onClick={handleRandomise}>Randomise</button>
      {song && <p>Selected Song: {song}</p>}
    </div>
  );
};

export default TimeMachineRandomiser;

