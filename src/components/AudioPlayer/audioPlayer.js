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
  const [error, setError] = useState(false);

  // All song previes from Spotify API are 30 seconds long but in case
  // i get audio from other source this duration will account for it
  const [duration, setDuration] = useState(0);

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  // holds the audio source that is currently being played, the url
  // Spotify does not give you the whole song just 30 sec preview
  let audioSrc = totalTracks[currentIndex]?.track.preview_url;

  const audioRef = useRef(null);

  // whenever a song is played or paused
  useEffect(() => {
    let audio = audioRef.current;

    const playAudio = async () => {
      try {
        setError(false);
        if (audio) {
          audio.currentTime = trackProgress;
          await audio.play();
          setIsPlaying(true);
        }

        audio.addEventListener('timeupdate', handleProgressUpdate)
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      } catch (error) {
        // setError(true);
      }
    }

    const pauseAudio = () => {
      if (audio) {
        audio.pause();
        audio.removeEventListener('timeupdate', handleProgressUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio = null;
      }
    }

    const handleProgressUpdate = () => {
      setTrackProgress(audio.currentTime);
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    }

    if (isPlaying) {
      playAudio();
    } else {
      pauseAudio();
    }
    // clean up, runs on unmount or rerenders after useEffect has begun running,
    // cleans up previous effects
    return () => {
      if (audio) {
        audio.pause();
        // audio.removeEventListener('timeupdate', handleProgressUpdate);
        // audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        // audio = null;
      }
    }

  }, [isPlaying]);

  // whenever the track changes
  useEffect(() => {
    let audio = null;

    const playAudio = async () => {
      try {
        if (audio){
          audio.pause();
          // audio.removeEventListener('timeupdate', handleProgressUpdate)
          // audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
          // audio = null;
        }
        setError(false);
        audio = new Audio(audioSrc);
        setTrackProgress(audio.currentTime);
        await audio.play();
        setIsPlaying(true);
        // audio.addEventListener('timeupdate', handleProgressUpdate)
        // audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      }
      catch (error) {
        // setError(true);
      }
    }

    playAudio();

    const handleProgressUpdate = () => {
      setTrackProgress(audio.currentTime);
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    }

    return () => {
      if (audio) {
        audio.pause();
        // audio.removeEventListener('timeupdate', handleProgressUpdate)
        // audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        // audio = null;
      }
    };
  }, [currentIndex]);

  //used to control the audio
  //may give error so using totalTracks[0] to check the first song
  // when the song changes and the index, this will update
  // const audioRef = useRef(new Audio(totalTracks[0]?.track.preview_url));

  // //used for changing the interval, an action that performs actions at regular intervals
  // // such as updating a song
  // // initalizes as undefined object until using setInterval
  // const intervalRef = useRef();

  // // if song is ready to be played, if song is in place to be played

  // const isReady = useRef(false);

  // // current length of song
  // const { duration } = audioRef.current;

  // // tracking current percentage of song
  // const currentPercentage = duration ? (trackProgress / duration) + 100 : 0;

  // // start a timer whenever a song starts playing

  // const intervalTiming = 1000;
  // const startTimer = () => {
  //   clearInterval(intervalRef.current);

  //   //audioRef.current is the duration of the song
  //   intervalRef.current = setInterval(() => {
  //     if (audioRef.current.ended) {
  //       //goes to the next song
  //       handleNext();
  //     }
  //     else {
  //       setTrackProgress(audioRef.current.currentTime);
  //     }
  //   }, [intervalTiming])
  // };


  // // checks if song is playing
  // // audio source is initially first track in tracks list, this updates it?
  // // whenever is playing button is changed
  // // run whenever a new song is played?
  // useEffect(() => {

  //   if (isPlaying && audioRef.current) {
  //     audioRef.current = new Audio(audioSrc)
  //     audioRef.current.play();
  //     // will check every second if the song is finsihed,
  //     // if it is ends the song and goes to the next
  //     // if not, sets current progress
  //     startTimer();
  //   }
  //   else {
  //     const pauseDelay = 100
  //     //intervalRef.current refers to ID of the interval
  //     clearInterval(intervalRef.current)
  //       audioRef.current.pause();
  //   }
  // }, [isPlaying])

  // //setting the current track progress of the song
  // // whenever the currentIndex is changed
  // // clear previous song and start new one
  // // pause prev song and playing it
  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.pause();
  //     audioRef.current = new Audio(audioSrc);
  //     setTrackProgress(audioRef.current.currentTime);
  //   }

  //   // checking if song is ready to be played
  //   if (isReady.current) {
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //     startTimer();
  //   }
  //   else {
  //     isReady.current = true;
  //   }

  // }, [currentIndex]);

  // //cleanup useEffect, leaving the screen/ clearing the intervals and track so no extra space

  // useEffect(() => {
  //   return () => {
  //     audioRef.current.pause();
  //     clearInterval(intervalRef.current);
  //   }
  // },[])

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
            <WaveAnimation isPlaying={true}/>
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
          <p className="error-message">{error ? "This song is not avaialable for preview" : ""}</p>
        </article>
        </section>
      </section>
    </article>
    </>
  )
}
