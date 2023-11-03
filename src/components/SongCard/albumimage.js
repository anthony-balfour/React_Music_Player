import React from 'react'
import './albumimage.css';

export const AlbumImage = ({url}) => {
  return (
      <article className='albumImage-container flex'>
        <img src={url} alt="album art" className="albumImage-art"/>

        {/* glassmorphism */}
        <section className='albumImage-shadow'>
          <img src={url} alt="shadow" className="albumImage-shadow" />
        </section>
      </article>
  )
}
