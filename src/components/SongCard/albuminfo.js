import React from 'react'
import './albuminfo.css';

export default function AlbumInfo({album}) {
  console.log(album);

  const artists = [];
  if (album) {
    album.artists.forEach(artist => {
      artists.push(artist.name);
    })
  }
  return (
    <div>
      <section className="abumName-container">
        <p>{album ? album.name + " - " + artists?.join(", ") : ""}</p>
      </section>
      <section className="album-info">
        <p></p>
      </section>
      <section className="album-release">
        <p></p>
      </section>
    </div>
  )
}
