import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Friendsrefer from "./components/Friendsrefer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/friendsrefer" element={<Friendsrefer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
