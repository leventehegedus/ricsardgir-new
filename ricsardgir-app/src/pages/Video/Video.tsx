import { useState, useEffect } from "react";
import { IVideo } from "../../types";
import { videos } from "../../data/videos";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import YouTube from 'react-youtube';

export const Video: React.FC<IVideo> = () => {

  const { id } = useParams();
  const [video, setConcert] = useState<IVideo>();

  useEffect(() => {
    let video = videos.filter(conc => conc.id === Number(id));
    setConcert(video[0]);
    window.scroll(0,0);
  }, [id])

  return (
    <div className="max-w-5xl p-4 pt-8 m-auto">
      {video ?
        <>
          <div className="mb-4">
            <div className="uppercase font-black text-black text-center">
              {video ?.id}. {video ?.title}
            </div>
            <div className="text-center mb-4">
              {video ?.year}
            </div>
            <div>
              <YouTube videoId={video.ytId}/>
            </div>
          </div>
          <div className="font-black text-black flex justify-between">
            <Link to={'/video'} className="hover:text-red-500">Vissza</Link>
          </div>
        </>
        :
        <ErrorPage />
      }
    </div>
  )
}

export default Video;
