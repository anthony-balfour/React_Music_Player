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
    // grabs the hash in the window's locationm which starts with "#access_token="
    // has the token type and the expires in, all separated by "&"
    // split will return an array with the access token as the first element
    const hash = window.location.hash;
    const token = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("access-token", token);
    setToken(token);
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