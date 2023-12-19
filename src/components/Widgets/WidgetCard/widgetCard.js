/**
 * Widget card in the Widget component located on the Player page, under the audioPlayer componenet
 */

import React from 'react'
import './widgetCard.css';

/**
 *
 * @param {String} title - Title of the widget card, either Featured artists,
 * new releases, or related artists
 * @returns
 */
export default function WidgetCard({title, similarArtists, featured, newRelease}) {
  return (

    <section className="widget-card-body">
      <p className="widget-title">{title}</p>
      {

        similarArtists ? similarArtists.map(artist => {
          <WidgetEntry
            title={artist.name}
            subtitle={artist.followers.total}
            // third image is the smallest image of the 3 given
            image={artist.images[2].url}
          />
        }) : featured ? featured.map(playlist => {
          <WidgetEntry
            title={playlist.name}
            subtitle={playlist.tracks.total}
            // third image is the smallest image of the 3 given
            image={playlist.images[2].url}
          />
        }) : newRelease ? newRelease.map(album => {
          <WidgetEntry
            title={album.name}
            subtitle={album.tracks.total}
            // third image is the smallest image of the 3 given
            image={album.images[2].url}
          />
        })

      }
    </section>
  )
}

