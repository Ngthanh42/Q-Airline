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
import { AuthContext } from './components/context/AuthContext';

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

        <Route path="/signin" element={
          <SignIn />
        } />
        <Route path="/signup" element={
          <SignUp />
        } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
