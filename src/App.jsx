import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  
  const [KEY] = useState("a998cde3d377cd93b99394e01e70c76b");

  return (
    <Router>
      <div>

        <NavBar />

        <Routes>
          <Route path="/" element={<h2>Welcome to Movie Explorer!</h2>} />
          <Route path="/movies" element={<h2>Movies</h2>} />
        </Routes>
      
        <Footer />

      </div>
    </Router>
  );
}

export default App;
