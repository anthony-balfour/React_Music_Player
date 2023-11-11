// The albumCard is the on the right body of the Player page, which contains
// album information
// contains album information, album image, date released

import React from 'react'
import './albumCard.css';
import AlbumInfo from './albuminfo';
import { AlbumImage } from './albumimage';
import spotify from '../../assets/spotify.jpg';


export const AlbumCard = ({album}) => {

  return (

    <article className="albumCard-body flex">
      <AlbumImage url={album ? album.images[0].url : spotify} />
      <AlbumInfo album={album}/>
    </article>
  )
}
