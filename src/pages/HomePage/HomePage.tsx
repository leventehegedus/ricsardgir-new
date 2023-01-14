import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../data/routes";
import { SlidingTileGame } from "../SlidingTileGame/SlidingTileGame";
import CanvasKoala from "../../components/CanvasKoala/CanvasKoala";
import { useParallax } from 'react-scroll-parallax';

export const HomePage: React.FC = () => {

  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  const renderHomePageBlock = (from: number, to: number) => {
    return (
      routes.map((route, index) => {
        if (from <= route.id && route.id <= to) {
          {
            let hue = Math.floor(Math.random() * 10) + 345;
            let saturation = Math.floor(Math.random() * 60) + 40;
            let light = Math.floor(Math.random() * 35) + 30;
            return (
              <Link to={route.url} className={`card ${Math.random() > 0.8 && "rotate-90"} ${Math.random() < 0.2 && "rotate-180"}`}>
                <div className={`card__face w-[300px] h-[300px] font-black text-3xl uppercase text-center flex justify-center items-center ${light < 50 ? "text-white" : "text-black"} p-4`} key={route.id} style={{ backgroundColor: 'hsl(' + hue + ',' + saturation + '%,' + light + '%)' }}>
                  {route.title}
                </div>
                <div className={`card__face card__face--back w-[300px] h-[300px] text-center flex justify-center items-center ${light < 50 ? "text-white" : "text-black"} p-4`} key={route.id} style={{ backgroundColor: 'hsl(' + hue + ',' + saturation + '%,' + light + '%)' }}>
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
    <>
      <div className="p2 sm:p-4 max-w-7xl	m-auto overflow-hidden">
        <div className="m-auto w-fit max-w-7xl m-auto grid grid-cols-[repeat(1,300px)] sm:grid-cols-[repeat(2,300px)]  auto-rows-[300px] lg:grid-cols-[repeat(3,300px)] xl:grid-cols-[repeat(4,300px)] grid-flow-row-dense gap-y-2 gap-x-2 text-white">
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
          <CanvasKoala />
        </div >
      </div>
    </>
  )
}

export default HomePage;
