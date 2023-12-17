  // // holds the audio source that is currently being played, the url
  // // Spotify does not give you the whole song just 30 sec preview

  // // whenever a song is played or paused
  // useEffect(() => {
  //   // let audio = null;
  //   const playAudio = async () => {
  //     console.log("brooooooo")
  //     try {
  //       setError(false);
  //       if (audio !== null) {
  //         await audio.play();
  //         console.log(audio)
  //       } else {
  //         let newAudio = new Audio(audioSrc);
  //         await setAudio(newAudio);
  //         audio.currentTime = trackProgress;
  //         audio.play();
  //         audio.currentTime = trackProgress;
  //         audio.addEventListener('timeupdate', handleProgressUpdate)
  //         audio.addEventListener('loadedmetadata', handleLoadedMetadata);
  //       }
  //     }
  //     catch (error) {
  //       console.error("huh", error);
  //       // setError(true);
  //     }
  //   }

  //   const pauseAudio = () => {
  //     if (audio) {
  //       audio.pause();
  //       audio.removeEventListener('timeupdate', handleProgressUpdate);
  //       audio.addEventListener('loadedmetadata', handleLoadedMetadata);
  //       // audio = null;
  //     }
  //   }

  //   const handleProgressUpdate = () => {
  //     setTrackProgress(audio.currentTime);
  //   }

  //   const handleLoadedMetadata = () => {
  //     setDuration(audio.duration);
  //   }

  //   if (isPlaying) {

  //     playAudio();
  //   } else {
  //     pauseAudio();
  //   }
  //   // clean up, runs on unmount or rerenders after useEffect has begun running,
  //   // cleans up previous effects
  //   return () => {
  //     if (audio) {
  //       audio.pause();
  //       audio.removeEventListener('timeupdate', handleProgressUpdate);
  //       audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
  //       // audio = null;
  //     }
  //   }

  // }, [isPlaying]);