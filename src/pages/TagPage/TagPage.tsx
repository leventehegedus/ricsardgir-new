import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive'
import { IContent } from "../../types";
import ContentTile from "../../components/ContentTile/ContentTile";

const emptyImages: string[] = [
  "/concerts/empty.jpg",
  "/concerts/empty_2.jpg",
  "/concerts/empty_3.jpg",
  "/concerts/empty_4.jpg",
  "/concerts/empty_5.jpg",
  "/concerts/empty_6.jpg",
  "/concerts/empty_7.jpg"
]

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
      <a key={id} href={block.url} target={block.url.indexOf("http") > -1 ? "__blank" : ""} className={`relative flex flex-col border border-white item-small overflow-hidden shadow-lg  bg-black p-2 transition-all duration-1000 ease-in-out hover:invert hover:scale-105	${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"} ${block.title.length > 120 ? Math.random() > 0.5 ? "row-span-2" : "col-span-2" : ""}`}>
        <img src={block.img || emptyImages[Math.floor(Math.random() * emptyImages.length)]}
          className={`h-full w-full opacity-70 object-cover	object-top transition-all duration-1000 ease-in-out hover:invert hover:scale-105 ${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"}`}
        />
        <span className="absolute text-white bg-[rgba(0,0,0,0.8)] p-2">{block.title}</span>
      </a>
    )
  }

  return (
      id ?
      <div className="md:grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] auto-rows-[8rem] gap-x-6 gap-y-6">
        <div className="md:h-16 font-black text-gir-500 item-small">
          <div className="text-3xl">#{id}</div>
        </div>

        {contents.map((block, index) => 
          <ContentTile {...block} id={index}/>)}
      </div>
      :
      <ErrorPage />
  )
}

export default TagPage;
