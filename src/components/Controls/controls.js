// Controls located in the right body of the AudioPlayer on the Player page
// right under the track name and wave animation
// handles next, prev, and play/pause

import React from 'react'
import './controls.css'
import { IconContext } from 'react-icons';
import {IoPlaySkipBack, IoPlaySkipForward, IoPlay} from 'react-icons/io5';

function Controls({isPlaying, setIsPlaying, handleNext, handlePrev, totalTracks}) {
  return (
    <IconContext.Provider value={{size: "35px", color: "#C4D0E3"}}>
      <section className="controls-wrapper flex">
        <div className="action-btn flex" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>

        <div className="play-pause-btn flex" onClick={() => setIsPlaying(!isPlaying)}>
          <IoPlay />
        </div>

        <div className="action-btn flex" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>

      </section>
    </IconContext.Provider>
  )
}

export default Controls;