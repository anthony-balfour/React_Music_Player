/** The left body section of the Player page,
 * Left body of the audioPlayer will have  a Progress Circle component, right body will have track name and controls
 * Two sections, left body and right body of the AudioPlayer
 * current track prop to get track info such as image to display while playing
 *
 */

import React from 'react'
import './audioPlayer.css'
import ProgressCircle from '../ProgressCircle/progressCircle';


export default function AudioPlayer({currentTrack}) {

  return (
    <article className="player-body flex">

      {/* contains the Progress Circle component which tracks the current song */}
      <section className="player-left-body">
        {/**
         * percentage through track
         * current track image
         * size of progress circle
         * color of track
         */}
        <ProgressCircle
          percentage = {75}
          isPlaying={true}
          size={300}
          color={"#C96850"}
          image={currentTrack?.album?.images[0]?.url}

        />
      </section>

        {/* contains track information */}
      <section className="player-right-body">
        <p className="song-title">{currentTrack?.name}</p>

      </section>
    </article>
  )
}
