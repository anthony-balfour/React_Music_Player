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
import Controls from '../Controls/controls.js';
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

  // const [error, setError] = useState(false);
  let audioSrc = totalTracks[currentIndex]?.track.preview_url;

  // used to play the audio and stop it
  // initial value will be the first song
  // used to control the audio
  // may give error so using totalTracks[0] to check the first song
  // when the song changes and the index, this will update
  const audioRef = useRef(new Audio(totalTracks[0]?.track.preview_url));

  //used for changing the interval, an action that performs actions at regular intervals
  // such as updating a song
  // initalizes as undefined object until using setInterval
  // useRef stores a mutable reference that persists across re-renders of a funcitonal component
  const intervalRef = useRef();

  // if song is ready to be played, if song is in place to be played
  // checks if song is in place and ready to be played
  const isReady = useRef(false);


  // All song previes from Spotify API are 30 seconds long but in case
  // i get audio from other source this duration will account for it

  // current length of song
  // current refers to the current value of the reference
  const { duration } = audioRef.current;

  // tracking current percentage of song
  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  // start a timer whenever a song starts playing
  // if the audio ref has ended, meaning the current song is over, goes to the next song
  // if it's not ended it will track the progress
  // primary purpose is to go to the next song if the current audio ref has ended
  // or to track song progress every second
  const startSongTracker = () => {

    // if there's an interval in the ref it's cleared
    clearInterval(intervalRef.current);

    const intervalTiming = 1000;

    //setInterval returns a in integer which is an ID for the interval,
    // so the interval can be cleared or canceled later
    // set interval calls a function at set intervals
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
  };

  const playSong = async () => {
    try {
      await audioRef.current.play();
    }
    catch (error) {
      console.log(error);
    }
  }


  // checks if song is playing
  // audio source is initially first track in tracks list, this updates it?
  // whenever is playing button is changed
  // run whenever a new song is played?
  useEffect(() => {

    // if the play button is hit and there is a song being used as ref to play
    if (isPlaying && audioRef.current) {
      // will update audio source if the current index changes

      audioRef.current = new Audio(audioSrc)
      playSong();

      // will check every second if the song is finsihed,
      // if it is ends the song and goes to the next
      // if not, sets current progress
      startSongTracker();
    }
    else {
      //intervalRef.current refers to ID of the interval
      clearInterval(intervalRef.current)
        audioRef.current.pause();
    }
  }, [isPlaying])


  /**
   * Setting the current track progress of the song whenever the currentIndex is changed
   * clear previous song and start new one
   * pause prev song and playing it
   */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = new Audio(audioSrc);
      setTrackProgress(audioRef.current.currentTime);
    }

    // checking if song is ready to be played
    if (isReady.current) {
      playSong();

        setIsPlaying(true);
      startSongTracker();
    }
    else {
      // this value is initialized as false
      isReady.current = true;
    }

  }, [currentIndex]);

  //cleanup useEffect, leaving the screen/clearing the intervals and track so no extra space is used
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

  // adds a zero to the front of a number if the number is less than 10
  const addZero = (n) => {
      return n < 10 ? n = "0" + n : n
    }

  return (
    <>
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
            <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
            <WaveAnimation isPlaying={isPlaying}/>
            <p className="duration">0:30</p>
          </section>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            totalTracks={totalTracks}
          />
        <article className="error-wrapper flex">
          <p className="error-message"></p>
        </article>
        </section>
      </section>
    </article>
    </>
  )
}
