// player page which handles music selected from the library
// The right body contains album information of the selected song
// grabs album state from the useNavigate hook from the Library Page
// Saves the track and setCurrentTrack using useState


import React, { useEffect, useState } from 'react'
import './player.css';
import { useLocation } from 'react-router-dom';
import apiClient from '../../spotify';
import { AlbumCard } from '../../components/AlbumCard/albumCard';
import { Queue } from '../../components/Queue/queue';

export default function Player() {

  // grabbing state from useNavigate hook from library file
  // returns an object with state as a value
  const location = useLocation();

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});

  // used for navigating tracks
  const [currentIndex, setCurrentIndex] = useState(0);

  // making API call if state of playlist id, grabbed from the library, is present,
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
        })
    }
  }, [location.state]);

  // to change the current track in the Player

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track)
  }, [currentIndex, tracks]);

  return (
    <div className='page-container flex' >

      {/* widget holder */}
      <section className="left-player-body">

      </section>

      {/* album info section and queue */}
      <section className="right-player-body">
        <AlbumCard album={currentTrack?.album}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </section>
    </div>
  )
}
