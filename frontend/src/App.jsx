import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from './components/navbar/navbar';
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
import AboutPage from './components/pages/about-us/about-us';

import { AuthContext } from './components/context/AuthContext';
import FlightsList from './components/pages/flight/flight-list';
import AirplaneDetails from './components/pages/airplane/airplane-detail';

import AboutPage from './components/pages/About/about_us';
import Offers from './components/pages/Offers/offers';
import Destinations from './components/pages/Destinations/destinations';
import Seats from './components/pages/Seats/seats';

const App = () => {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to="/signin" />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        {/* Route home page */}
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Home />
              <Search />
              <Support />
              <Info />
              <Lounge />
              <Travelers />
              <Subscribe />
              <Footer />
            </div>
          }
        />

        <Route path="/offers" element={<Offers />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/seats" element={<Seats />} />
        <Route
          path="/about-us"
          element={
            <>
              <Navbar />
              <AboutPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/signin"
          element={
            <>
              <Navbar />
              <SignIn />
              <Footer />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <SignUp />
              <Footer />
            </>
          }
        />

        <Route
          path="/flight-list"
          element={
            <>
              <Navbar />
              <FlightsList />
              <Footer />
            </>
          }
        />

        <Route
          path="/airplane-information/:id"
          element={
            <>
              <Navbar />
              <AirplaneDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
