import { useState, useEffect, useRef, MutableRefObject } from "react";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa"
import { animations } from "../../data/animations";
import { useMediaQuery } from 'react-responsive'
import { ITrack } from "../../types";

export const Track: React.FC<ITrack> = (props) => {

  const randomAnimation = Math.floor(Math.random() * animations.length);
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })

  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(props.preview_url)) as any;
  //todo, check how refs works with typescript properly

  const calculateDuration = (duration_ms: number): string => {
    let mins = Math.floor(duration_ms / 1000 / 60);
    let secs = Math.floor(duration_ms / 1000) % 60;
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  }

  const onButtonClick = (play: boolean) => {
    let myAudio: any = audioRef.current;
    if (play) {
      myAudio.play();
    } else {
      myAudio.pause();
    }
    setPlaying(play);
    // const timer = setTimeout(() => {
    //   myAudio.pause();
    // }, 1000);
    // return () => clearTimeout(timer);
  }

  return (
    <div className="flex flex-col border border-black overflow-hidden shadow-lg item-small mb-4 md:mb-0"
      data-aos={isTabletOrBigger && animations[randomAnimation]}
    >
      <div className="h-full w-full overflow-hidden relative">
        <img src={props.image}
          className={`h-full w-full object-cover	object-top ${Math.random() > 0.9 && "rotate-90"} ${Math.random() < 0.1 && "rotate-180"}`}
        />
        {isPlaying ?
          <FaRegPauseCircle onClick={() => { onButtonClick(!isPlaying) }} onMouseLeave={() => { onButtonClick(false) }} className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-1000 ease-in-out z-10 text-white" size={"9em"} />
          :
          <FaRegPlayCircle onClick={() => { onButtonClick(!isPlaying) }} onMouseLeave={() => { onButtonClick(false) }} className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-1000 ease-in-out opacity-0 hover:opacity-100 z-10 text-white" size={"9em"} />
        }
      </div>
      <div className="bg-black text-white p-2 text-xs">
        <div>
          {props.track_number}. {props.name}
        </div>
        <div>
          {calculateDuration(props.duration_ms)}
        </div>
      </div>
      <audio
        src={props.preview_url}
        ref={audioRef}
        onEnded={() => { setPlaying(!isPlaying) }}
      />
    </div>
  )
}

export default Track;
