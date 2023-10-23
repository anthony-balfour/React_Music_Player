import React, { useEffect, useState } from 'react'
import Library from '../Library/library'
import Feed from '../Feed/feed'
import Favorites from '../Favorites/favorites'
import Trending from '../Trending/trending'
import Player from '../Player/player'
import './home.css'
import { Login } from '../Login/login'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from '../../components/Sidebar/sidebar'

function Home() {

  const [token, setToken] = useState('');

  useEffect(() => {
    // grabs the hash in the window's location
    const hash = window.location.hash;
  })
  return (
    <Router>
      <main className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />

          <Route path="/feed" element={<Feed />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  )
}

export default Home