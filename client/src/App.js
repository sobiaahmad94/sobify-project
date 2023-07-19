import SkeletonContainer from "./components/SkeletonContainer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import PlaylistList from "./components/PlaylistList";
import FavouritePlaylist from "./components/FavouritePlaylist";
import CreatePlaylist from "./components/CreatePlaylist";
import TimeMachineRandomiser from "./components/TimeMachineRandomiser";
// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <SkeletonContainer />
        <Routes>
          <Route exact path="/" element={<PlaylistList/>} />
          <Route exact path="/favourites" element={<FavouritePlaylist />} />
          <Route exact path="/createplaylist" element={<CreatePlaylist />} />
          <Route exact path="/timemachine" element={<TimeMachineRandomiser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
