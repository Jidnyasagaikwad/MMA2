import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Premier from './Premier';
import About from './About';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop'; // Ensure you import ScrollToTop

function App() {
  return (
    <Router>
      <div className="App">
        {/* ScrollToTop component inside App component */} 
        <ScrollToTop />
        <Routes>   
          <Route path="/" element={<Home />} />
          <Route path="/premier" element={<Premier />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
