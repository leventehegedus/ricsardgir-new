import { animations } from "../../data/animations";
import { Typewriter } from 'react-simple-typewriter'

const movieStoryBlock = [
  {
    text: "Megszületik Mártondani",
    img: "",
    title: "1989",
  },
  {
    text: "MártonDani és Andris megalapítják a Ricsárdgírt, aminek ekkor még nem is az volt a neve",
    img: "",
    title: "2007",
  },
  {
    text: "Barni lesz a zenakar roadja",
    img: "",
    title: "2019",
  },
  {
    text: "",
    img: "/movie/03.jpg",
    title: "",
  },
  {
    text: "2023 május 18-án leteszi a zenekar a lantot, utoljára járják el a koalatáncot a Budapest Park színpadján.",
    img: "",
    title: "Utolsó koncert",
  }
]

export const Timeline: React.FC = () => {
  const randomAnimation = Math.floor(Math.random() * animations.length);

  const renderStoryBlock = (block: {
    text: string,
    img: string,
    title: string
  }) => {
    return (
      <div className="mb-4 md:mb-0 flex flex-col border border-solid border-white overflow-hidden shadow-lg text-white p-2"
        data-aos={animations[randomAnimation]}
        data-aos-duration="1000"
      >
        <span className="font-black uppercase text-gir-500"><Typewriter words={[block.title]} /></span>
        <span><Typewriter words={[block.text]} /></span>
        {block.img &&
          <img src={block.img} className="h-full w-full object-cover object-top" />
        }
      </div>
    )
  }

  return (
    <>
      <div className="w-full p-4 font-black text-gir-500 text-6xl flex justify-center">
        <Typewriter words={["ez volt a ricsárdgír"]} typeSpeed={100} />
      </div>
      <div className="relative p-4 m-auto max-w-7xl after:content after:absolute after:bg-white after:top-0 after:bottom-0 after:left-1/2 after:w-1">
        {movieStoryBlock.map((block, index) => {
          return (
            <div className="relative md:p-4 odd:left-0 even:left-[25%] md:even:left-[calc(50%+0.25rem)] w-3/4 z-10 md:z-0 md:w-1/2 bg-black md:bg-transparent after:absolute after:w-4 after:h-4 after:right-[-0.625rem] even:after:left-[-0.625rem] md:after:bg-white after:top-1/2 md:after:z-10 after:translate-y-[-50%] md:after:border after:border-solid after:border-black before:h-0 before:absolute before:top-1/2 before:w-0 before:z-10 before:border-8 before:border-solid before:border-white odd:before:right-0 odd:before:border-r-8 odd:before:border-transparent md:odd:before:border-l-white even:before:left-0 even:before:border-r-8 even:before:border-transparent md:even:before:border-r-white before:translate-y-[-50%]" key={index}>
              {renderStoryBlock(block)}
            </div>
          )
        })}
      </div>
      <div className="w-full mt-[1000px] p-4 font-black text-gir-500 text-6xl flex justify-center">
        <Typewriter words={["vagy. nem."]} typeSpeed={100} />
      </div>
    </>
  )
}

export default Timeline;
