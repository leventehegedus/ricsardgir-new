import {useEffect} from "react";
import { Footer } from "../../components/Footer/Footer";

const homePageBlocks = [
  {
    id: 0,
    title: "gírtinder",
    img: "./home/tinder.jpg",
    gif: "./home/tinder.gif"
  },
  {
    id: 1,
    title: "bulikrumpli",
    img: "./home/bulikrumpli.jpg",
    gif: "./home/bulikrumpli.gif"
  },
  {
    id: 2,
    title: "ricsaj",
    img: "./home/ricsaj.jpg",
    gif: "./home/ricsaj.gif"
  },
  {
    id: 3,
    title: "mörcs",
    img: "./home/morcs.jpg",
    gif: "./home/morcs.gif"
  },
  {
    id: 4,
    title: "kvíz",
    img: "./home/quiz.jpg",
    gif: "./home/quiz.gif"
  },
  {
    id: 5,
    title: "a ricsárdgír szar",
    img: "./home/shit.jpg",
    gif: "./home/shit.gif"
  },
  {
    id: 6,
    title: "videók",
    img: "./home/videogif.jpg",
    gif: "./home/videogif.gif"
  },
  {
    id: 7,
    title: "koala",
    img: "./home/koala.jpg",
    gif: "./home/koala.gif"
  },
  {
    id: 8,
    title: "flappy koala",
    img: "./home/flappy.jpg",
    gif: "./home/flappy.gif"
  },
  {
    id: 9,
    title: "pénzt",
    img: "./home/money.jpg",
    gif: "./home/money.gif"
  },
  {
    id: 0,
    title: "2049",
    img: "./home/2049.jpg",
    gif: "./home/2049.gif"
  },
]


export const HomePage: React.FC = () => {

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
      homePageBlocks.map(block =>  {
        return (
          <div className="home-page-block flex flex-col shadow-lg row-span-2 col-span-3"
            onMouseMove={fn}
            onMouseEnter={() =>  {
              toggleBgEnter(block)
            }}
            onMouseLeave={() =>  {
              toggleBgLeave(block)
            }}
            style={{ backgroundImage: `url(${block.img})` }}
            id={block.title}
            key={block.id}
          >
            <span className="tooltip">{block.title}</span>
          </div>
        )
      })
    )
  }

  return (
    <>
      <div>
        <div className="p-4 max-w-7xl	m-auto grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] auto-rows-[160px] grid-flow-row-dense gap-y-16">
        </div>
        {renderConcerts()}
        <Footer />
      </div>
    </>
  )
}


export default HomePage;
