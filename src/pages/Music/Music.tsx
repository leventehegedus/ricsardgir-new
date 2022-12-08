import { useState, useEffect } from "react";
import { IAlbum } from "../../types";
import { albums } from "../../data/albums";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import YouTube from 'react-youtube';

export const Music: React.FC = () => {

  const { id } = useParams();
  const [album, setAlbum] = useState<IAlbum>();

  useEffect(() => {
    let album = albums.filter(album => album.id === (id));
    setAlbum(album[0]);
    window.scroll(0, 0);
  }, [id])

  // const renderArticles = (articles: IArticle[]) => {
  //   return (
  //     <div>
  //       {
  //         articles ?.map(article => {
  //           return (
  //             <div>
  //               {article.url ?
  //                 <a href={article.url} target="__blank" className="hover:text-gir-500">{article.title}</a>
  //                 :
  //                 <span>{article.title}</span>
  //               }
  //             </div>
  //           )
  //         })
  //   }
  //     </div>
  //   )
  // }

  return (
    <div className="max-w-5xl p-4 pt-8 m-auto text-white">
      {album ?
        <>
          <div>{album.name}</div>
          <div>{album.year}</div>
          <div className="font-black flex justify-between">
            <Link to={'/ricsaj'} className="hover:text-red-500">Vissza</Link>
          </div>
        </>
        :
        <ErrorPage />
      }
    </div>
  )
}

export default Music;
