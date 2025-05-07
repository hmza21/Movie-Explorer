import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"

const App = () => {
  
  const [KEY] = useState("a998cde3d377cd93b99394e01e70c76b");

  return (
    <Router>
      <div>
        
        <div>
          <h1>Movie Explorer</h1>
        </div>

        <Navbar />

        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/movies" element={<h2>Movies</h2>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
