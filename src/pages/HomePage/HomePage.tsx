import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../data/routes";
import { SlidingTileGame } from "../SlidingTileGame/SlidingTileGame";
import CanvasKoala from "../../components/CanvasKoala/CanvasKoala";
import { useLocation } from 'react-router-dom';
import React from "react";

const tileStyle = "card__face w-[300px] h-[300px] text-center flex justify-center items-center"

export const HomePage: React.FC = () => {
  const app = React.useRef<HTMLInputElement>(null);
  const location = useLocation();

  useEffect(() => {
    console.log(location)
  }, [])

  const getTextColor = (light: number) => {
    return light < 50 ? "text-white" : "text-black"
  }

  const getRotation = (rotation: number) => {
    if (rotation > 0.8) {
      return "rotate-90"
    } else if (rotation < 0.2) {
      return "rotate-180"
    } else {
      return ""
    }
  }

  const getColor = () => {
    let hue = Math.floor(Math.random() * 10) + 345;
    let saturation = Math.floor(Math.random() * 60) + 40;
    let light = Math.floor(Math.random() * 35) + 30;
    return { hue, saturation, light }
  }

  const getBg = (hue: number, saturation: number, light: number) => {
    return `hsl(${hue},${saturation}%,${light}%)`
  }

  const renderHomePageBlock = (from: number, to: number) => {
    return (
      routes.map((route, index) => {
        if (from <= route.id && route.id <= to) {
          {

            return (
              <Link to={route.url} className={`card ${getRotation(Math.random())}`} key={route.id}>
                <div className={`${tileStyle} font-black text-3xl uppercase ${getTextColor(getColor().light)}`} style={{ backgroundColor: getBg(getColor().hue, getColor().saturation, getColor().light) }}>
                  {route.title}
                </div>
                <div className={`${tileStyle} card__face--back p-4 ${getTextColor(getColor().light)}`} style={{ backgroundColor: getBg(getColor().hue, getColor().saturation, getColor().light) }}>
                  {route.description}
                </div>
              </Link>
            )
          }
        }
      })
    )
  }

  return (
    <div ref={app} className="m-auto w-fit max-w-7xl m-auto grid grid-cols-[repeat(1,300px)] sm:grid-cols-[repeat(2,300px)]  auto-rows-[300px] lg:grid-cols-[repeat(3,300px)] xl:grid-cols-[repeat(4,300px)] grid-flow-row-dense gap-y-4 gap-x-4">
      <SlidingTileGame folder={"koala"} size={4} />
      {renderHomePageBlock(0, 1)}
      <a href={"https://www.youtube.com/watch?v=iCQ0dJ6nJXo"} target="_blank" className={`card ${getRotation(Math.random())}`}>
        <div className={`${tileStyle}`}>
          <img src="./concerts/empty_6.jpg" />
          <div className="absolute flex justify-center items-center h-full w-full font-black text-3xl uppercase">spoiler</div>
        </div>
        <div className={`${tileStyle} card__face--back ${getTextColor(getColor().light)} p-4`} style={{ backgroundColor: getBg(getColor().hue, getColor().saturation, getColor().light) }}>
          Ki ölte meg Laura Palmert?
        </div>
      </a>
      {renderHomePageBlock(11, 11)}
      <SlidingTileGame folder={"danilaci"} size={3} />
      {renderHomePageBlock(2, 3)}
      <SlidingTileGame folder={"nincsensarkany"} size={4} />
      {renderHomePageBlock(5, 6)}
      <a href={"https://open.spotify.com/playlist/0RhyV3VaGs9mk9F84yVPvT"} target="_blank" className={`card ${getRotation(Math.random())}`}>
        <div className={`${tileStyle}`}>
          <img src="./concerts/empty_4.jpg" className="object-cover h-full w-full" />
          <div className="absolute flex justify-center items-center h-full w-full font-black text-3xl uppercase text-black">PLAYLIST</div>
        </div>
        <div className={`${tileStyle} card__face--back ${getTextColor(getColor().light)} p-4`} style={{ backgroundColor: getBg(getColor().hue, getColor().saturation, getColor().light) }}>
          Offisöl Ricsárdgír turnébusz playlist. Ha végighallgatod úgy fogsz brékelni, mint Mártondani. Rosszul.
        </div>
      </a>
      {renderHomePageBlock(10, 10)}
      <a href={"https://www.youtube.com/watch?v=VGJYKX_4Qds"} target="_blank" className={`card ${getRotation(Math.random())}`}>
        <div className={`${tileStyle}`}>
          <img src="./richardgere.jpeg" className="object-cover h-full w-full" />
          <div className="absolute flex justify-center items-center h-full w-full font-black text-3xl uppercase text-black">EXKLUZÍV INTERJÚ RICHARD GERE-REL</div>
        </div>
        <div className={`${tileStyle} card__face--back ${getTextColor(getColor().light)} p-4`} style={{ backgroundColor: getBg(getColor().hue, getColor().saturation, getColor().light) }}>
          Exkluzív interjút készített Richard Gere-rel a Ricsárdgír
        </div>
      </a>
      {renderHomePageBlock(4, 4)}
      <SlidingTileGame folder={"thedarksideofthemoon"} size={5} />
      {renderHomePageBlock(7, 7)}
      <SlidingTileGame folder={"riseofthekoala"} size={4} />
      <a href={"https://soundcloud.com/thericsardgirls"} target="_blank" className={`card ${getRotation(Math.random())}`}>
        <div className={`${tileStyle}`}>
          <img src="./ricsardgirls.jpeg" className="object-cover h-full w-full" />
        </div>
        <div className={`${tileStyle} card__face--back ${getTextColor(getColor().light)} p-4`} style={{ backgroundColor: getBg(getColor().hue, getColor().saturation, getColor().light) }}>
          Legjobb csajbanda az univerzumban
        </div>
      </a>
      {renderHomePageBlock(8, 8)}
      <SlidingTileGame folder={"killthekoala"} size={4} />
      {renderHomePageBlock(9, 9)}
      <SlidingTileGame folder={"oldkoala"} size={6} />
      {
        location.pathname === '/' &&
        <CanvasKoala />
      }
      {/* <Link to={'/stat'} className="gsap-card card">stat</Link> */}
      <a href={"http://teszt.ricsardgir.com"} target="_blank" className={`card ${getRotation(Math.random())}`}>
        <div className={`${tileStyle}`}>
          <img src="./oldwebsite.jpg" className="object-cover h-full w-full" />
          <div className="absolute flex justify-center items-center h-full w-full font-black text-3xl uppercase text-white">GÍRHONLAP 2.0</div>
        </div>
        <div className={`${tileStyle} card__face--back ${getTextColor(getColor().light)} p-4`} style={{ backgroundColor: getBg(getColor().hue, getColor().saturation, getColor().light) }}>
          Az előző honlap, ami kevésbé jó, de ugyanannyiba került.
        </div>
      </a>
      <a href={"https://teszt.ricsardgir.com/flappy/"} target="_blank" className={`card ${getRotation(Math.random())}`}>
        <div className={`${tileStyle}`}>
          <img src="./flappy.gif" className="object-cover h-full w-full object-left" />
          <div className="absolute flex justify-center items-center h-full w-full font-black text-3xl uppercase text-black">Flappy koala</div>
        </div>
        <div className={`${tileStyle} card__face--back ${getTextColor(getColor().light)} p-4`} style={{ backgroundColor: getBg(getColor().hue, getColor().saturation, getColor().light) }}>
          Járjuk a fellegekben a koala táncot, szárnyalj koala
        </div>
      </a>

    </div >
  )
}

export default HomePage;
