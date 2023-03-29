import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../data/routes";
import { SlidingTileGame } from "../SlidingTileGame/SlidingTileGame";
import CanvasKoala from "../../components/CanvasKoala/CanvasKoala";
import { useLocation } from 'react-router-dom';

const tileStyle = "card__face w-[300px] h-[300px] text-center flex justify-center items-center p-4"

export const HomePage: React.FC = () => {
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

  const getBg = (hue: number, saturation: number, light: number) => {
    return `hsl(${hue},${saturation}%,${light}%)`
  }

  const renderHomePageBlock = (from: number, to: number) => {
    return (
      routes.map((route, index) => {
        if (from <= route.id && route.id <= to) {
          {
            let hue = Math.floor(Math.random() * 10) + 345;
            let saturation = Math.floor(Math.random() * 60) + 40;
            let light = Math.floor(Math.random() * 35) + 30;

            return (
              <Link to={route.url} className={`card ${getRotation(Math.random())}`} key={route.id}>
                <div className={`${tileStyle} font-black text-3xl uppercase ${getTextColor(light)}`} style={{ backgroundColor: getBg(hue, saturation, light) }}>
                  {route.title}
                </div>
                <div className={`${tileStyle} card__face--back ${getTextColor(light)}`} style={{ backgroundColor: getBg(hue, saturation, light) }}>
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
    <div className="m-auto w-fit max-w-7xl m-auto grid grid-cols-[repeat(1,300px)] sm:grid-cols-[repeat(2,300px)]  auto-rows-[300px] lg:grid-cols-[repeat(3,300px)] xl:grid-cols-[repeat(4,300px)] grid-flow-row-dense gap-y-2 gap-x-2 ">
      <SlidingTileGame folder={"koala"} size={4} />
      {renderHomePageBlock(0, 3)}
      <SlidingTileGame folder={"danilaci"} size={3} />
      {renderHomePageBlock(4, 4)}
      <SlidingTileGame folder={"nincsensarkany"} size={4} />
      <SlidingTileGame folder={"thedarksideofthemoon"} size={5} />
      {renderHomePageBlock(5, 6)}
      {renderHomePageBlock(7, 8)}
      <SlidingTileGame folder={"riseofthekoala"} size={4} />
      {renderHomePageBlock(9, 9)}
      <SlidingTileGame folder={"killthekoala"} size={4} />
      <SlidingTileGame folder={"oldkoala"} size={6} />
      {
        location.pathname === '/' &&
        <CanvasKoala />
      }
    </div >
  )
}

export default HomePage;
