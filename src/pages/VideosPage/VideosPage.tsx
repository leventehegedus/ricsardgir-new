import { videos } from "../../data/videos";
import { animations } from "../../data/animations";
import { Link } from "react-router-dom";


export const VideosPage: React.FC = () => {

  return (
    <div className="p-4 max-w-7xl	m-auto grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] grid-flow-row-dense gap-x-8 gap-y-8">
      {videos?.map((video) => {
        return (
          <Link to={`/video/${video.id}`}
            className="flex flex-col border border-black overflow-hidden shadow-lg row-span-2 col-span-1 lg:row-span-2 lg:col-span-2 p-4 bg-white"
            key={video.id}
            data-aos={animations[Math.floor(Math.random() * animations.length)]}>
            <div className="h-full w-full overflow-hidden">
              <img src={`https://img.youtube.com/vi/${video.ytId}/0.jpg`} className={`h-full w-full object-cover	object-center transition-all duration-1000 ease-in-out hover:invert hover:scale-105	${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"}`} />
            </div>
            <div className="text-black pt-4 text-xs">
              <span className="font-black uppercase text-gray-900">{video.title} </span><span className="text-gray-700">{video.year}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}


export default VideosPage;
