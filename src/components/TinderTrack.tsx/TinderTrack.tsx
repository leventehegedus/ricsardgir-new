import { useState, useRef } from "react";
import { ITrack } from "../../types";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa"

export const TinderTrack: React.FC<ITrack> = (props) => {

  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(props.preview_url)) as any;
  //todo, check how refs works with typescript properly

  const onButtonClick = (play: boolean) => {
    let myAudio: any = audioRef.current;
    if (play) {
      myAudio.play();
    } else {
      myAudio.pause();
    }
    setPlaying(play);
  }

  return (
    <div>
      <div>
        {isPlaying ?
          <div className="flex gap-1 p-2" onClick={() => { onButtonClick(!isPlaying) }} onMouseLeave={() => { onButtonClick(false) }}>
            <FaRegPauseCircle size={"1.5em"} />
            <span>{props.name}</span>
          </div>
          :
          <div className="flex gap-1 p-2" onClick={() => { onButtonClick(!isPlaying) }} onMouseEnter={() => { onButtonClick(!isPlaying) }} onMouseLeave={() => { onButtonClick(false) }}>
            <FaRegPlayCircle size={"1.5em"} />
            <span>{props.name}</span>
          </div>
        }
      </div>
      <audio
        src={props.preview_url}
        ref={audioRef}
        onEnded={() => { setPlaying(!isPlaying) }}
      />
    </div>
  )
}

export default TinderTrack;
