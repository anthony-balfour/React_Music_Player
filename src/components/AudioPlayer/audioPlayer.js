/**, left body will have  a Progress Circle component, right body will have track name and controls
 * Two sections, left body and right body of the AudioPlayer
 * current track prop to get track info such as image to display while playing
 *
 */

import React from 'react'
import './audioPlayer.css'
import ProgressCircle from '../ProgressCircle/progressCircle';


export default function AudioPlayer({currentTrack}) {
  console.log(currentTrack);
  return (
    <article className="player-body flex">

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
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color={"#C96850"}
        />
      </section>

      <section className="player-right-body">

      </section>
    </article>
  )
}
