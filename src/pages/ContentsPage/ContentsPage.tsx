import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive'
import { IContent } from "../../types";

const emptyImages: string[] = [
  "/concerts/empty.jpg",
  "/concerts/empty_2.jpg",
  "/concerts/empty_3.jpg",
  "/concerts/empty_4.jpg",
  "/concerts/empty_5.jpg",
  "/concerts/empty_6.jpg",
  "/concerts/empty_7.jpg"
]

export const ContentsPage: React.FC = () => {

  const [contents, setContents] = useState<IContent[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })

  useEffect(() => {
    fetch("/data/contents.ts")
      .then(res => res.json())
      .then(response => {
        setContents(response)
        let tagArray: string[] = []
        response.forEach((res: IContent) => {
            if(res.tags){
                res.tags.forEach((tag: string) => {
                    if(tagArray.indexOf(tag) < 0){
                        tagArray.push(tag)
                    }
                });
            }
        });
        setTags(tagArray)
      }).catch(err => {
        console.log(err);
      })
  }, [])

  return (
      <div className="p-4 max-w-7xl	m-auto">
        {tags.map((tag, index) => {
            return <div className="md:grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] auto-rows-[8rem] gap-x-6 gap-y-6">
                <div className="md:h-16 font-black text-gir-500 text-9xl row-span-2 col-span-1 flex justify-center">
                    <div className="text-3xl">#{tag}</div>
                </div>
                {contents.map(content => {
                    if(content.tags?.includes(tag)){
                        return <div className={`relative flex flex-col border border-white item-small overflow-hidden shadow-lg  bg-black p-2 transition-all duration-1000 ease-in-out hover:invert hover:scale-105	${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"} ${content.title.length > 120 ? Math.random() > 0.5 ? "row-span-2" : "col-span-2" : ""}`}>
                            {content.title}
                        </div>
                    }
                })}
                <div className="row-span-1 col-span-5">
                </div>
            </div>
        })}
      </div>
  )
}

export default ContentsPage;
