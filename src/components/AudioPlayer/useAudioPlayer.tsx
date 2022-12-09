import { useState, useEffect } from "react";

const useAudioPlayer = (audioId) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioId) {
      const audio = document.getElementById(audioId);
      audio.addEventListener('loadeddata', (event) => {
        console.log('Yay! The readyState just increased to  ' +
          'HAVE_CURRENT_DATA or greater for the first time.');
      });
      audio.addEventListener('canplaythrough', (event) => {
        console.log('I think I can play through the entire ' +
          'video without ever having to stop to buffer.');
      });
      audio.load();
      playing ? audio.play() : audio.pause();
    }
  });

  return {
    playing,
    setPlaying
  }
}

export default useAudioPlayer;
