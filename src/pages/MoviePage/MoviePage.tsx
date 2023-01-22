import { animations } from "../../data/animations";
import { movieStoryBlocks } from "../../data/movie";


export const MoviePage: React.FC = () => {
  const randomAnimation = Math.floor(Math.random() * animations.length);

  const renderStoryBlock = (block: {
    text: string,
    img: string,
    title: string,
    size: string
  }, id: number) => {
    return (
      <div className={`mb-4 md:mb-0 flex flex-col border border-solid border-white overflow-hidden shadow-lg  bg-black p-2 transition-all duration-1000 ease-in-out hover:invert hover:scale-105 ${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"} ${block.size}`}
        data-aos={animations[randomAnimation]}
        data-aos-duration="1000"
        key={id}
      >
        <span className="font-black uppercase">{block.title}</span>
        <span>{block.text}</span>
        {block.img &&
          <img src={block.img} className="h-full w-full object-cover object-top" />
        }
      </div>
    )
  }

  return (
    <div className="md:grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] gap-x-8 gap-y-8">
      {movieStoryBlocks.map((block, index) => {
        return renderStoryBlock(block, index)
      })
      }
    </div>
  )
}

export default MoviePage;
