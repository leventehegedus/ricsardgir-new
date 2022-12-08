import {useEffect} from "react";
import {Link} from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { routes } from "../../data/routes";
import { SlidingTileGame } from "../SlidingTileGame/SlidingTileGame";

export const HomePage: React.FC = () => {

  useEffect(() => {
    window.scroll(0,0);
  }, [])

  const fn = (e: any) => {
    let tooltip: HTMLElement[] = Array.from(document.querySelectorAll('.tooltip'));
    for (let i = 0; i < tooltip.length; i++) {
      tooltip[i].style.left = e.pageX + 'px';
      tooltip[i].style.top = e.pageY + 'px';
    }
  }

  const toggleBgEnter = (block: any) =>  {
    let htmlBlock = document.getElementById(block.title)
    if (htmlBlock) {
      htmlBlock.style.backgroundImage = `url(${block.gif})`;
    }
  }
  const toggleBgLeave = (block: any) =>  {
    let htmlBlock = document.getElementById(block.title)
    if (htmlBlock) {
      htmlBlock.style.backgroundImage = `url(${block.img})`;
    }
  }

  const renderHomePageBlock = () => {
    return (
      routes.map(route =>  {
        return (
          <Link to={route.url} className="home-page-block flex flex-col shadow-lg row-span-2 col-span-3"
            onMouseMove={fn}
            onMouseEnter={() =>  {
              toggleBgEnter(route)
            }}
            onMouseLeave={() =>  {
              toggleBgLeave(route)
            }}
            style={{ backgroundImage: `url(${route.img})` }}
            id={route.title}
            key={route.id}
          >
            <span className="tooltip">{route.title}</span>
          </Link>
        )
      })
    )
  }

  return (
    <>
      <div>
        <SlidingTileGame />
        <div className="p-4 max-w-7xl	m-auto grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] grid-flow-row-dense gap-y-16">
          <div className="row-span-1 col-span-3 text-white">Üdv a Ricsárdgír zenekar honlapján. Görgess tovább, ha kiraktad a koalát!</div>
          {renderHomePageBlock()}
        </div>
        <Footer />
      </div>
    </>
  )
}


export default HomePage;
