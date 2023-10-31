import React from 'react'
import './albumimage.css';

export const AlbumImage = ({url}) => {
  console.log(url);
  return (
    <div>
      <article className='albumImage'>
        <img src={url} alt="album art" className="albumImage-art"/>

        {/* glassmorphism */}
        <section className='albumImage-shadow'>
          <img src={url} alt="shadow" className="albumImage-shadow" />
        </section>
      </article>
    </div>
  )
}
