import React, { useEffect, useState } from 'react'
import './player.css';
import { useLocation } from 'react-router-dom';
import apiClient from '../../spotify';
import { SongCard } from '../../components/SongCard/songCard';
import { Queue } from '../../components/Queue/queue';

export default function Player() {

  // grabbing state from useNavigate hook from library file
  // returns an object with state as a value
  const location = useLocation();

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});

  // used for navigating tracks
  const [currentIndex, setCurrentIndex] = useState(0);

  // making API call if state of playlist id is present,
  // it will be present if clicked on from library
  useEffect(() => {
    if (location.state) {
      // if location.state is null, this code will evaluate to undefined
      // and will not crash the app
      apiClient.get("playlists/" + location.state?.id + "/tracks")
        .then(response => {
          setTracks(response.data.items);
          // using response from Spotify API to play current track
          setCurrentTrack(response.data.items[0] ? response.data.items[0].track : []);
          console.log(response);
        })
    }
  }, [location.state]);
  return (
    <div className='page-container flex' >

      {/* widget holder */}
      <section className="left-player-body">

      </section>

      {/* album info section and queue */}
      <section className="right-player-body">
        <SongCard album={currentTrack.album}/>
        <Queue />
      </section>
    </div>
  )
}
