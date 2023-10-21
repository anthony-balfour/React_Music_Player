import React from 'react'
import Library from '../Library/library'
import Feed from '../Feed/feed'
import Favorites from '../Favorites/favorites'
import Trending from '../Trending/trending'
import Player from '../Player/player'
import './home.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function Home() {
  return (
    <Router>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </div>
    </Router>
  )
}
