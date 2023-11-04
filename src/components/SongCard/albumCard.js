import React from 'react'
import './albumCard.css';
import AlbumInfo from './albuminfo';
import { AlbumImage } from './albumimage';
import spotify from '../../assets/spotify.jpg';

// The songCard is the on the right body of the Player page, which contains
// the album information? Maybe call it albumCard
// contains album, album image, date released

export const AlbumCard = ({album}) => {

  return (

    <article className="songCard-body flex">
      <AlbumImage url={album ? album.images[0].url : spotify} />
      <AlbumInfo album={album}/>
    </article>
  )
}
