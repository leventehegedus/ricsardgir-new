import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { routes } from "../../data/routes";
import { SlidingTileGame } from "../SlidingTileGame/SlidingTileGame";
import { Typewriter } from 'react-simple-typewriter'
import { useParallax } from 'react-scroll-parallax';
import { HomePageParallaxElement } from '../../components/HomePageParallaxElement/HomePageParallaxElement';


export const HomePage: React.FC = () => {

  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  const renderHomePageBlock = () => {
    return (
      routes.map((route, index) => {
        {
          let hue = 350;
          let saturation = Math.floor(Math.random() * 100);
          let light = Math.floor(Math.random() * 100);
          return (
            <Link to={route.url} className="card">
              <div className={`card__face border border-solid border-white w-[300px] h-[300px] font-black text-3xl text-center flex justify-center items-center ${light < 50 ? "text-white" : "text-black"} p-4`} key={route.id} style={{ backgroundColor: 'hsl(' + hue + ',' + saturation + '%,' + light + '%)' }}>
                {route.title}
              </div>
              <div className={`card__face card__face--back border border-solid border-white w-[300px] h-[300px] text-center flex justify-center items-center ${light < 50 ? "text-white" : "text-black"} p-4`} key={route.id} style={{ backgroundColor: 'hsl(' + hue + ',' + saturation + '%,' + light + '%)' }}>
                {route.description}
              </div>
            </Link>
          )
          /*return <HomePageParallaxElement {...route} key={index} />*/
        }
      })
    )
  }

  return (
    <>
      <div className="p2 sm:p-4 max-w-7xl	m-auto overflow-hidden">
        <div className="m-auto w-fit max-w-7xl m-auto grid grid-cols-[repeat(1,300px)] sm:grid-cols-[repeat(2,300px)]  auto-rows-[300px] lg:grid-cols-[repeat(3,300px)] xl:grid-cols-[repeat(4,300px)] grid-flow-row-dense gap-y-2 gap-x-2 text-white">
          <SlidingTileGame folder={"koala"} />
          {renderHomePageBlock()}
          <SlidingTileGame folder={"danilaci"} />
        </div >
        <Footer />
      </div>
    </>
  )
}

export default HomePage;
