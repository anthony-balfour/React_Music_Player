/**
 * Widget card in the Widget component located on the Player page, under the audioPlayer componenet
 */

import React from 'react';
import './widgetCard.css';
import WidgetEntry from '../Entry/widgetEntry';
import { IconContext } from 'react-icons';
import {FiChevronRight} from 'react-icons/fi';
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
          return (
            <WidgetEntry
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              // third image is the smallest image of the 3 given
              image={artist?.images[2]?.url}
            />
          )
        }) : featured ? featured.map(playlist => {
          return (
            <WidgetEntry
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + " Songs"}
              // third image is the smallest image of the 3 given
              image={playlist?.images[0]?.url}
            />
          )
        }) : newRelease ? newRelease.map(album => {
          return (
            <WidgetEntry
              title={album?.name}
              subtitle={album?.artists[0]?.name}
              // third image is the smallest image of the 3 given
              image={album?.images[2]?.url}
            />
          )
        })

        : null
    }

    {/* Fade property on widget cards */}
     <div className="widget-fade">
      <div className="fade-button">
        <IconContext.Provider value={{size: "24px", color: "#c4d0e3"}}>
          <FiChevronRight />
        </IconContext.Provider>
      </div>
    </div>
    </section>
  )
}

