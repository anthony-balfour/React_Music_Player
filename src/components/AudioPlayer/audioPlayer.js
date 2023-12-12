/** The left body section of the Player page,
 * Left body of the audioPlayer will have  a Progress Circle component, right body will have track name and controls
 * Two sections, left body and right body of the AudioPlayer
 * current track prop to get track info such as image to display while playing
 *
 */

import React from 'react'
import './audioPlayer.css'
import ProgressCircle from '../ProgressCircle/progressCircle';
import WaveAnimation from '../WaveAnimation/waveAnimation';
import Controls from '../Controls/controls';


export default function AudioPlayer({currentTrack}) {
  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  })
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
      <section className="player-right-body flex">

        <p className="song-title">{currentTrack?.name}</p>
        <p className="song-artist" >{artists.join(' | ' )}</p>

        <section className="player-right-body-bottom flex">
          <section className="song-duration flex" >
            <p className="duration">0:01</p>
            <WaveAnimation />
            <p className="duration">0:30</p>
          </section>
          <Controls
            // isPlaying={isPlaying}
            // setIsPlaying={setIsPlaying}
            // handleNext={handleNext}
            // handlePrev={handlePrev}
            // total={total}
          />
        </section>
      </section>
      
    </article>
  )
}
