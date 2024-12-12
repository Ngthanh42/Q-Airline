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

import About from './components/pages/About/about_us';
import Destinations from './components/pages/Destinations/destinations';
import Seats from './components/pages/Seats/seats'
import Offers from './components/pages/Offers/offers';

import { AuthContext } from './components/context/AuthContext';
import FlightsList from './components/pages/flight/flight-list';
import AirplaneDetails from './components/pages/airplane/airplane-detail';

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

        <Route 
          path="/destinations" 
          element={
            <>
              <Navbar />
              <Destinations />
              <Footer />
            </>
          } 
        />

        <Route
          path="/seats"
          element={
            <>
              <Navbar />
              <Seats />
              <Footer />
            </>
          }
        />

        <Route
          path="/offers"
          element={
            <>
              <Navbar />
              <Offers />
              <Footer />
            </>
          }
        />

        <Route
          path="/about_us"
          element={
            <>
              <Navbar />
              <About />
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
