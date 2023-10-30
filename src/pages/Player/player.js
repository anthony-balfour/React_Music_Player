import React, { useEffect } from 'react'
import './player.css';
import { useLocation } from 'react-router-dom';
import apiClient from '../../spotify';

export default function Player() {

  // grabbing state from useNavigate hook from library file
  // returns an object with state as a value
  const location = useLocation();

  // making API call if state of playlist id is present,
  // it will be present if clicked on from library
  useEffect(() => {
    if (location.state) {
      apiClient.get("playlists/" + location.state?.id + "/tracks")
    }
  })
  return (
    <div className='page-container'>
      <section className="left-player-body">

      </section>

      <section className="right-player-body">

      </section>
    </div>
  )
}
