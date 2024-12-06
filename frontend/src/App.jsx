import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './components/home/home';
import Search from './components/search/search';
import Support from './components/support/support';

import Info from './components/info/info';
import Lounge from './components/lounge/lounge';
import Travelers from './components/travelers/travelers';
import Subscribe from './components/subscribers/subscribe';
import Footer from './components/footer/footer';
import SignIn from './components/auth/signin/signin';
import SignUp from './components/auth/signup/signup';

import AboutPage from './components/pages/About/about_us';
import Offers from './components/pages/Offers/offers';
import Destinations from './components/pages/Destinations/destinations';
import Seats from './components/pages/Seats/seats';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route home page */}
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Search />
              <Support />
              <Info />
              <Lounge />
              <Travelers />
              <Subscribe />
            </div>
          }
        />

        <Route path="/about_us" element={<AboutPage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/seats" element={<Seats />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
