import { useState, useEffect, useRef } from "react";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa"
import ReactAudioPlayer from 'react-audio-player';
import { animations } from "../../data/animations";
import { useMediaQuery } from 'react-responsive'

export const Track: React.FC<IConcert> = (props) => {

  const randomAnimation = Math.floor(Math.random() * animations.length);
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })

  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(props.preview_url));

  const calculateDuration = (duration_ms: number): string => {
    let mins = Math.floor(duration_ms / 1000 / 60);
    let secs = Math.floor(duration_ms / 1000) % 60;
    return `${mins}:${secs < 10 ? "0"+secs : secs}`;
  }

  const onButtonClick = (play) => {
    console.log(play)
    if (play) {
      audioRef.current.audioEl.current.play();
    } else {
      audioRef.current.audioEl.current.pause();
    }
    setPlaying(play);
  }


  return (
    <div className="flex flex-col border border-black overflow-hidden shadow-lg item-small"
      data-aos={isTabletOrBigger && animations[randomAnimation]}
    >
      <div className="h-full w-full overflow-hidden relative">
        <img src={props.images[1].url}
          className={`h-full w-full object-cover	object-top transition-all duration-1000 ease-in-out hover:invert hover:scale-105 ${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"}`}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center" onClick={() => { onButtonClick(!isPlaying) }} onMouseLeave={() => { onButtonClick(false) }}>
          {isPlaying ?
            <FaRegPauseCircle className="transition-all duration-1000 ease-in-out" size={"9em"} />
            :
            <FaRegPlayCircle className="transition-all duration-1000 ease-in-out opacity-0 hover:opacity-100" size={"9em"} />}
        </div>
      </div>
      <div className="bg-black text-white p-2 text-xs">
        <div>
          {props.track_number}. {props.name}
        </div>
        <div>
          {calculateDuration(props.duration_ms)}
        </div>
      </div>
      <ReactAudioPlayer
        src={props.preview_url}
        ref={audioRef}
        onEnded={() =>  { setPlaying(!isPlaying) }}
      />
    </div>
  )
}

export default Track;
