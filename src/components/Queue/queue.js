// located on the Player page in the right body under the Album Card

import React from 'react'
import './queue.css';

export const Queue = ({ tracks, setCurrentIndex}) => {
  console.log(tracks);
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {
          tracks?.map((track) => {
            return (
              <div className="queue-item flex">
                <p className="track-name">{track?.track?.artists[0]?.name} - {track?.track?.name} </p>
                <p></p>
              </div>
            )})
          }
        </div>
      </div>
    </div>

  )
}
