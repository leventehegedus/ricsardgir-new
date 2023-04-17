import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive'
import { IContent } from "../../types";
import ContentTile from "../../components/ContentTile/ContentTile";

export const TagPage: React.FC = () => {

  const { id } = useParams();
  const [contents, setContents] = useState<IContent[]>([]);
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })

  useEffect(() => {
    fetch("/data/contents.ts")
      .then(res => res.json())
      .then(response => {
        setContents(response.filter(((res: { tags: (string | undefined)[]; }) => res.tags && res.tags.indexOf(id) > -1)))
      }).catch(err => {
        console.log(err);
      })
    window.scroll(0, 0);
  }, [])

  return (
    id ?
      <div className="p-4 max-w-7xl	m-auto md:grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] grid-flow-row-dense gap-x-8 gap-y-8">
        <div className="md:h-16 font-black text-gir-500 item-small">
          <div className="text-3xl">#{id}</div>
        </div>
        {contents.map((block, index) =>
          <ContentTile {...block} id={index} />)}
      </div>
      :
      <ErrorPage />
  )
}

export default TagPage;
