import React from 'react'
import './progressCircle.css'

// Circle component
const Circle = ({color, percentage, size, strokeWidth}) => {
  // stroke for outer circle
  const radius = (size / 2) - 10;
  const circ = ((2 * Math.PI * radius) - 20)
  // percentage of song played
  const strokePct =  ((100 - Math.round(percentage) * circ)) / 100;

  // creates an svg circle with various properties
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
