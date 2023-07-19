import SkeletonContainer from "./components/SkeletonContainer";
import {BrowserRouter as Router} from "react-router-dom";


// styles
import "./App.css";

function App() {
  return (
    <div className="App">
    <Router>
      <SkeletonContainer />
      </Router>


    
    
    </div>
  );
}

export default App;
