import { useEffect } from "react";
import useScript from './useScript';

export const Flappy: React.FC = () => {

  useScript("/flappy/js/jquery.min.js");
  useScript("/flappy/js/jquery.transit.min.js");
  useScript("/flappy/js/buzz.min.js");
  useScript("/flappy/js/main.js");

  return (
    <>
      <div id="gamecontainer">
        <div id="gamescreen">
          <div id="sky" className="animated">
            <div id="flyarea">
              <div id="ceiling" className="animated"></div>
              <div id="player" className="bird animated"></div>

              <div id="bigscore"></div>

              <div id="splash"></div>

              <div id="scoreboard">
                <div id="medal"></div>
                <div id="currentscore"></div>
                <div id="highscore"></div>
                <div id="replay"><img src="flappy/assets/replay.png" alt="replay" /></div>
              </div>
            </div>
          </div>
          <div id="land" className="animated"><div id="debug"></div></div>
        </div>
      </div>
      <div className="boundingbox" id="playerbox"></div>
      <div className="boundingbox" id="pipebox"></div>
    </>
  )
}


export default Flappy;
