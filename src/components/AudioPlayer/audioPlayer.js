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
import { useState, useRef, useEffect } from 'react';

/**
 *
 * @param {setCurrentIndex} - changes the current song
 * @returns
 */
export default function AudioPlayer({currentTrack, currentIndex, setCurrentIndex, totalTracks}) {

  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  })

  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  // holds the audio source that is currently being played, the url
  // Spotify does not give you the whole song just 30 sec preview
  let audioSrc = totalTracks[currentIndex]?.track.preview_url;

  //used to control the audio
  //may give error so using totalTracks[0] to check the first song
  // when the song changes and the index, this will update
  const audioRef = useRef(new Audio(totalTracks[0]?.track.preview_url));

  //used for changing the interval, an action that performs actions at regular intervals
  // such as updating a song
  // initalizes as undefined object until using setInterval
  const intervalRef = useRef();

  // if song is ready to be played, if song is in place to be played

  const isReady = useRef(false);

  // current length of song
  const { duration } = audioRef.current;

  // tracking current percentage of song
  const currentPercentage = duration ? (trackProgress / duration) + 100 : 0;

  // start a timer whenever a song starts playing

  const intervalTiming = 1000;
  const startTimer = () => {
    clearInterval(intervalRef.current);

    //audioRef.current is the duration of the song
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        //goes to the next song
        handleNext();
      }
      else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [intervalTiming])
  }

  // checks if song is playing
  // audio source is initially first track in tracks list, this updates it?
  // whenever is playing button is changed
  // run whenever a new song is played?
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current = new Audio(audioSrc)
      audioRef.current.play();
      // will check every second if the song is finsihed,
      // if it is ends the song and goes to the next
      // if not, sets current progress
      startTimer();
    }
    else {
      //intervalRef.current refers to ID of the interval
      clearInterval(intervalRef.current)
      audioRef.current.pause();
    }
  }, [isPlaying])

  //setting the current track progress of the song
  // whenever the currentIndex is changed
  // clear previous song and start new one
  // pause prev song and playing it
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime);

    // checking if song is ready to be played
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    }
    else {
      isReady.current = true;
    }

  }, [currentIndex]);

  //cleanup useEffect, leaving the screen/ clearing the intervals and track so no extra space

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  },[])

  //  switches to the next song
  const handleNext = () => {
    if (currentIndex < totalTracks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    // if it's on the last song
    else {
      setCurrentIndex(0);
    }
  }

  // changes the song to the previous song
  // if the song is the first song, changes the song to the last one
  const handlePrev = () => {
    // if the song playing is the first song
    if (currentIndex - 1 < 0) setCurrentIndex(totalTracks.length - 1);
    else {
      setCurrentIndex(currentIndex - 1);
    }
  }

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
          percentage = {currentPercentage}
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
            <WaveAnimation isPlaying={true}/>
            <p className="duration">0:30</p>
          </section>
          <Controls
            // isPlaying={true}
            // setIsPlaying={setIsPlaying}
            // handleNext={handleNext}
            // handlePrev={handlePrev}
            // totalTracks={totalTracks}
          />
        </section>
      </section>

    </article>
  )
}
