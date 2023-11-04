// The info the album on the Album Card on the Player page

import React from 'react'
import './albuminfo.css';

export default function AlbumInfo({album}) {

  const artists = [];
  if (album) {
    album.artists.forEach(artist => {
      artists.push(artist.name);
    })
  }
  return (
    <div className="albumInfo-card">
      <section className="albumName-container">
        <p>{album ? album.name + " - " + artists?.join(", ") : ""}</p>
      </section>
      <section className="album-info">
        <p>{`${album?.name} is an ${album?.album_type} with ${album?.total_tracks} track(s)`}</p>
      </section>
      <section className="album-release">
        <p>Release Date: {album?.release_date}</p>
      </section>
    </div>
  )
}
