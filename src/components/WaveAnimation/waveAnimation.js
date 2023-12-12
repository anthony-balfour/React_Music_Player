//waveAnimation on the audioPlayer right body which is located on the Player page
// the waveAnimation is between the two duration numbers and under
// the track title and artist names
// wave is only active when song is playing
// 13 different boxes with different animations

import React from 'react'
import './waveAnimation.css';

export default function WaveAnimation({isPlaying}) {

  const waveClass = isPlaying ? "box active" : "box";
  return (
    <section className="box-container flex">
      <div className={`${waveClass} box1`}></div>
      <div className={`${waveClass} box2`}></div>
      <div className={`${waveClass} box3`}></div>
      <div className={`${waveClass} box4`}></div>
      <div className={`${waveClass} box5`}></div>
      <div className={`${waveClass} box6`}></div>
      <div className={`${waveClass} box7`}></div>
      <div className={`${waveClass} box2`}></div>
      <div className={`${waveClass} box3`}></div>
      <div className={`${waveClass} box4`}></div>
      <div className={`${waveClass} box5`}></div>
      <div className={`${waveClass} box6`}></div>
      <div className={`${waveClass} box7`}></div>
    </section>
  )
}
