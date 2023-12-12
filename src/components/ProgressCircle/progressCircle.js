// Progress Circle component which is rendered on the Player page in the left body
// represents the progress of the current track to its end time

import React from 'react'
import './progressCircle.css'

// Circle component
const Circle = ({color, percentage, size, strokeWidth}) => {
  // stroke for outer circle
  const radius = (size / 2) - 10;

  // circumference
  const circ = 2 * Math.PI * radius - 20

  // percentage of song played, representing as part of a circle
  const strokePct =  (100 - Math.round(percentage) * circ) / 100;

  // creates an svg circle with various properties
  return (
    // svg circle with radius props
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill = "transparent"
      stroke = {strokePct !== circ ? color : ""}
      strokeWidth = {strokeWidth}
      // length of the dash pattern, can specifiy gaps,
      // picking circ means the entire length is solid
      strokeDasharray={circ}
      // sets the starting point of the dash pattern for the stroke
      strokeDashoffset = {percentage ? strokePct : 0}
      // style of stroke line endpoints
      strokeLinecap = "round"
      ></circle>
  )
}

export default function ProgressCircle({percentage, isPlaying, size, color}) {
  return (<section className="progress-circle">
    <svg width = {size} height = {size}>
      <g>
        <Circle strokeWidth={"0.4rem"} color="#3B4F73" size={size} />
        <Circle strokeWidth={"0.6rem"} color={color} percentage={percentage} size={size} />
      </g>
    </svg>
  </section>
  )
}
