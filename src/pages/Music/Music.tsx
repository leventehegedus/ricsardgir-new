import { useState, useEffect } from "react";
import { IAlbum } from "../../types";
import { albums } from "../../data/albums";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { Track } from "../../components/Track/Track";
import YouTube from 'react-youtube';

export const Music: React.FC = () => {

  const { id } = useParams();
  const [albums, setAlbums] = useState<IAlbum[]>();

  // useEffect(() => {
  //   let album = albums.filter(album => album.id === (id));
  //   setAlbum(album[0]);
  //   window.scroll(0, 0);
  // }, [id])

  useEffect(() => {
    fetch("/data/albums.ts")
      .then(res => res.json())
      .then(response => {
        setAlbums(response);
        console.log(response);
      }).catch(err => {
        console.log(err);
      })
  }, [])

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
      {albums ?
        albums.map(album => {
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] gap-x-8 gap-y-8">
          {
            album.tracks.items.map(track => <Track key={track.id} {...track} />)
          }
          </div>}
        )
        :
        <ErrorPage />
      }
    </div>
  )
}

export default Music;
