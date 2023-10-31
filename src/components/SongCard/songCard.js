import React from 'react'
import './songCard.css';
import AlbumInfo from './albuminfo';
import { AlbumImage } from './albumimage';
import spotify from '../../assets/spotify.jpg';


// contains album, album image, date released

export const SongCard = ({album}) => {

  return (

    <article className="songCard-body">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album}/>
    </article>
  )
}
