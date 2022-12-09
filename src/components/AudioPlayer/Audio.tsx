import { useEffect, useState } from "react";
import React from "react";
import Play from "./Play";
import Pause from "./Pause";

import useAudioPlayer from './useAudioPlayer';

export const Audio = (url) =>  {
  const { playing, setPlaying } = useAudioPlayer();
  const [songUrl, setSongUrl] = useState("");

  useEffect(() =>  {
    console.log(url);
    setSongUrl(url.url);
  }, [])

  return (
    <div>
      <audio id={songUrl}>
        <source src={songUrl} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      {
        songUrl &&
        <div className="flex items-center">
          {playing ?
            <Pause handleClick={() => setPlaying(false)} audioId={songUrl} /> :
            <Play handleClick={() => setPlaying(true)} audioId={songUrl} />
          }
        </div>
      }
    </div>
  );
}

export default Audio;
