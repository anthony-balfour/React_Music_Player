/**
 * Displays the home page of the app. If the access token is not in state, if it's
 * the users first itme logging in, or the access token has expired after 30 minutes, then the login
 * page is displayed. Otherwise the app is displayed
 */

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
import { setClientToken } from '../../spotify'

function Home() {

  const [token, setToken] = useState('');

  // grabbing the access token if it's not already in local storage
  // if it is in local storage, the token is set to the API headers for every call
  useEffect(() => {

    let token = window.localStorage.getItem("access-token");
    const hash = window.location.hash;
    // clearing the hash since it's saved in local
    window.location.hash="";
    if (!token && hash) {
      token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("access-token", token);
      setToken(token);
      setClientToken(token);
    } else {
      setToken(token);
      setClientToken(token);
    }
    // grabs the hash in the window's locationm which starts with "#access_token="
    // has the token type and the expires in, all separated by "&"
    // split will return an array with the access token as the first element

  }, []);

  return (
    // if the access token is not in state, then the login page is displayed,
    // else all other routes and the home library page is rendered
    !token ? <Login /> : (
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
  )
}

export default Home