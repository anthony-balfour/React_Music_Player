import React from 'react'
import Library from '../Library/library'
import Feed from '../Feed/feed'
import Favorites from '../Favorites/favorites'
import Trending from '../Trending/trending'
import Player from '../Player/player'
import './home.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from '../../components/Sidebar/sidebar'

function Home() {
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
        </Routes>
      </main>
    </Router>
  )
}

export default Home