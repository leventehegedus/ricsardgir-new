import React from "react";
import Play from "./Play";
import Pause from "./Pause";

import useAudioPlayer from './useAudioPlayer';

export const Audio = () => {
  const { playing, setPlaying } = useAudioPlayer();

  return (
    <div>
      <audio id="audio">
        <source src="/midi_lightsaber.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="flex items-center">
        {playing ?
          <Pause handleClick={() => setPlaying(false)} /> :
          <Play handleClick={() => setPlaying(true)} />
        }
      </div>
    </div>
  );
}

export default Audio;
