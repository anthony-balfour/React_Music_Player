// located on the Player page in the right body under the Album Card

import React from 'react'
import './queue.css';

export const Queue = ({ tracks, setCurrentIndex}) => {
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {
          tracks?.map((track, index) => {
            // onClick sets the index of the track in the tracks array
            // to the current index
            // maps over tracks and lists them in a column flex container
            return (
              <div className="queue-item flex" onClick={() => setCurrentIndex(index)}>
                <p className="track-name">{track?.track?.artists[0]?.name} - {track?.track?.name} </p>
                <p>0:30</p>
              </div>
            )})
          }
        </div>
      </div>
    </div>

  )
}
