// Progress Circle component which is rendered on the AudioPlayer in the left body
// which is in the Player page in the left body
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
  const strokePct =  ((100 - Math.round(percentage)) * circ) / 100;

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

export default function ProgressCircle({percentage, isPlaying, size, color, image}) {
  return (
  <section className="progress-circle">
    <svg width = {size} height = {size}>
      <g>
        <Circle strokeWidth={"0.4rem"} color="#3B4F73" size={size} />
        <Circle strokeWidth={"0.6rem"} color={color} percentage={percentage} size={size} />
      </g>
      <defs>
        {/* Vinyl inside the progress circle */}
        <clipPath id="myCircle">
          <circle cx="50%" cy="50%" r={size/2 - 30} fill="#FFFFFF" />
        </clipPath>
        <clipPath id="#myInnerCircle">
          <circle cx="50%" cy="50%" r={size / 2 - 100} fill="#FFFFFF" />
        </clipPath>
      </defs>
      {/* image diameter is twice the radius of the clip path circle */}
      {/* song image in the href */}
      <image
        className={isPlaying ? "active" : "" }
        x={30}
        y={30}
        width={2 * (size / 2 - 30)}
        height={2 * (size / 2 - 30)}
        href= {"https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"}
        clipPath={"#myCircle"}
      />
      <image
        className={isPlaying ? "active" : "" }
        x={100}
        y={100}
        width={2 * (size / 2 - 100)}
        height={2 * (size / 2 - 100)}
        href= {image}
        clipPath={"#myinnerCircle"}
        />
    </svg>
  </section>
  )
}
