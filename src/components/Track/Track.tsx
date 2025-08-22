import { useState, useRef, useCallback, useMemo } from "react";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { ITrack, VIEWMODE } from "../../types";

const MS_IN_MINUTE = 60000;
const MS_IN_SECOND = 1000;
const MATH_RANDOM_PERCENT = 0.9;

const iconStyle =
  "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-1000 ease-in-out z-10";

const calculateDuration = (ms: number): string => {
  const mins = Math.floor(ms / MS_IN_MINUTE);
  const secs = Math.floor((ms % MS_IN_MINUTE) / MS_IN_SECOND);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

export const Track = ({
  preview_url,
  image,
  name,
  duration_ms,
  track_number,
  view,
}: ITrack & { view: VIEWMODE }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const setPlayState = useCallback((play: boolean) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (play) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(play);
  }, []);

  const handleEnded = () => setIsPlaying(false);

  const rotationClass = useMemo(() => {
    const rand = Math.random();
    if (rand > 0.9) return "rotate-90";
    if (rand < 0.1) return "rotate-180";
    return "";
  }, []);

  return (
    <div
      className={`${view === VIEWMODE.GRID && "flex-col"} 
        flex border overflow-hidden shadow-lg item-small mb-4 md:mb-0 p-4 bg-white gap-2 justify-between
      `}
    >
      <div
        className={`${
          view === VIEWMODE.GRID
            ? "h-full w-full"
            : "h-16 w-16 flex items-center"
        } overflow-hidden relative`}
      >
        <img
          src={image}
          className={`${
            view === VIEWMODE.GRID ? "h-full w-full" : "h-16 w-16"
          } object-cover object-top ${rotationClass}`}
        />

        {isPlaying ? (
          <FaRegPauseCircle
            onClick={() => setPlayState(false)}
            onMouseLeave={() => setPlayState(false)}
            className={iconStyle}
            size={view === VIEWMODE.GRID ? "9em" : "3em"}
          />
        ) : (
          <FaRegPlayCircle
            onClick={() => setPlayState(true)}
            onMouseLeave={() => setPlayState(false)}
            className={`${iconStyle} opacity-0 hover:opacity-100`}
            size={view === VIEWMODE.GRID ? "9em" : "3em"}
          />
        )}
      </div>

      <div
        className={`${
          view === VIEWMODE.LINE ? "flex gap-2 items-center" : "pt-2"
        } bg-white`}
      >
        <span
          className={`${
            view === VIEWMODE.GRID ? "pb-2" : ""
          } font-black text-gray-900 uppercase truncate`}
        >
          {track_number}. {name}
        </span>{" "}
        <span className="text-gray-700">{calculateDuration(duration_ms)}</span>
      </div>

      <audio ref={audioRef} src={preview_url} onEnded={handleEnded} />
    </div>
  );
};

export default Track;
