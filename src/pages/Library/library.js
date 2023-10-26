import React, { useState, useEffect } from 'react'
import apiClient from '../../spotify'
import './library.css';

export default function Library() {

  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    apiClient.get("me/playlists")
    .then(response => {
      setPlaylists(response.data.items);
    })
  }, []);
  return (
    <div className='page-container'>
      <main className='library-body'>
        {playlists?.map((playlist) => {
          console.log(playlist);
          return <div>{playlist.name}</div>
        })}
      </main>
    </div>
  )
}
