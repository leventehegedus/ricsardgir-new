import { useState, useEffect } from "react";
import { IVideo, IArticle } from "../../types";
import { videos } from "../../data/videos";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import YouTube from 'react-youtube';


export const Video: React.FC = () => {

  const { id } = useParams();
  const [video, setConcert] = useState<IVideo>();

  useEffect(() => {
    let video = videos.filter(conc => conc.id === Number(id));
    setConcert(video[0]);
  }, [id])

  const renderArticles = (articles: IArticle[]) => {
    return (
      <div>
        {
          articles ?.map(article => {
            return (
              <div>
                {article.url ?
                  <a href={article.url} target="__blank" className="hover:text-gir-500">{article.title}</a>
                  :
                  <span>{article.title}</span>
                }
              </div>
            )
          })
    }
      </div>
    )
  }

  return (
    <div className="max-w-5xl pt-8">
      {video ?
        <>
          <div className="mb-4">
            <div className="uppercase font-black text-center">
              {video ?.title}
            </div>
            <div className="text-center mb-4">
              {video ?.year}
            </div>
            <div className="flex justify-center">
              <YouTube videoId={video.ytId} className="w-full" />
            </div>
          </div>
          <div>
            {video.director && <div className="mb-4"><span className="font-black">Rendezte:</span> {video.director}</div>}
            <div className="mb-4">
              {video ?.highlights && renderArticles(video.highlights)}
            </div>
            <div className="mb-4 font-black">Cikkek:</div>
            <div className="mb-4">
              {video ?.articles && renderArticles(video.articles)}
            </div>
          </div>
          <div className="font-black flex justify-between">
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
