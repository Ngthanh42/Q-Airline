import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/home/home'
import Search from './components/search/search'
import Support from './components/support/support'
import Info from './components/info/info'
import Lounge from './components/lounge/lounge'
import Travelers from './components/travelers/travelers'
import Subscribe from './components/subscribers/subscribe'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      {/* <Lounge />
      <Travelers />
      <Subscribe />
      <Footer /> */}
    </div>
  )
}

export default App
