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
          tracks?.map(track => {
            <div className="queue-item">
              <p className="track-name">{track?.track.name}</p>
              <p></p>
            </div>
          })
          }
        </div>
      </div>
    </div>

  )
}
