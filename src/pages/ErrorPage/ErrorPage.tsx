import { Link } from "react-router-dom";
import YouTube from 'react-youtube';

export const ErrorPage: React.FC = () => {

  return (
    <div className="md:absolute h-full w-full flex flex-col top-0 bottom-0 justify-center items-center p-4 text-center">
      <img className="rotate-180 hover:rotate-0 transition-all duration-1000 ease-in-out" src="/fav.png" />
      <Link to="/" className="mt-4">
        <span className="text-white hover:text-gir-500">Járatlan koala utakon vándorolsz kishaver. Vissza a főoldalra</span>
      </Link>
      <br></br>
      <div className="text-white">
        <span>De amíg visszatalálsz a megfelelő ösvényre nézd meg ezt a kedves videót!</span>
        <YouTube videoId={"Ix-Pe78B7lw"} className="w-full" />
      </div>
    </div>
  )
}


export default ErrorPage;
