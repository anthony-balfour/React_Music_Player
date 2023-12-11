import React from 'react'
import './progressCircle.css'

// Circle component
const Circle = ({color, percentage, size, strokeWidth}) => {
  // stroke for outer circle
  const radius = (size / 2) - 10;
  const circ = ((2 * Math.PI * radius) - 20)
  // percentage of song played
  const strokePct =  ((100 - Math.round(percentage) * circ)) / 100;

  return (
    // svg circle with radius props
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill = "transparent"
      stroke = {strokePct != circ ? color : ""}
      strokeWidth = {strokeWidth}
      strokeDashArray={circ}
      strokeDashOffset = {percentage ? strokePct : 0}
      strokeLinecap = "round"
      ></circle>
  )
}

export default function ProgressCircle({percentage, isPlaying, size, color}) {
  return (

  )
}
