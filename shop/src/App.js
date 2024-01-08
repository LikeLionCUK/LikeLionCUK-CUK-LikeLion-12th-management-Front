import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './footer';
import MainPage from './MainPage';
import Album from './album';
import Purchase from './Purchase';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/albums" element={<Album/>} />
          <Route path="/albums/:albumName" element={<Purchase/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
