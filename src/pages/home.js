import React from 'react'
import Library from './library'
import Feed from './feed'
import Favorites from './favorites'
import Trending from './trending'
import Player from './player'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </Router>
  )
}
