import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive'
import { IContent } from "../../types";


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
  }, [])

  const renderArticleBlock = (block: IContent, id: number) => {
    return (
      <a href={block.url} target="__blank" className={`relative flex flex-col border border-white overflow-hidden shadow-lg  bg-black p-2 transition-all duration-1000 ease-in-out hover:invert hover:scale-105	${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"} ${block.title.length > 120 ? Math.random() > 0.5 ? "row-span-2" : "col-span-2" : ""}`}>
        <img src={block.img}
          className={`h-full w-full object-cover	object-top transition-all duration-1000 ease-in-out hover:invert hover:scale-105 ${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"}`}
        />
        <span className="absolute text-black bg-gir-500 p-2">{block.title}</span>
      </a>
    )
  }

  const renderBlock = (contents: IContent[], title: string) => {
    console.log(contents, id)
    return (
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] grid-flow-dense gap-x-8 gap-y-8 mb-8">
        <div className="font-black uppercase text-gir-500">{title}</div>
        {contents.map((block, index) => {
          return renderArticleBlock(block, index)
        })
        }
      </div>
    )
  }

  return (
    <div className="p-4 max-w-7xl	m-auto grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] grid-flow-row-dense gap-x-8 gap-y-8">
      {
        id ?
          renderBlock(contents, id)
          :
          <ErrorPage />
      }
    </div>
  )
}

export default TagPage;
