import { useState, useEffect } from "react";

function useAudioPlayer() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("audio");
    playing ? audio.play() : audio.pause();
  });

  return {
    playing,
    setPlaying
  }
}

export default useAudioPlayer;
