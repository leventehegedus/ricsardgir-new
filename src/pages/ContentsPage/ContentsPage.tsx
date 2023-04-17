import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive'
import { IContent } from "../../types";
import ContentTile from "../../components/ContentTile/ContentTile";
import { TagDescriptionTile } from "../../components/TagDescriptionTile/TagDescriptionTile";

export const ContentsPage: React.FC = () => {

  const [contents, setContents] = useState<IContent[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    fetch("/data/contents.ts")
      .then(res => res.json())
      .then(response => {
        setContents(response)
        let tagArray: string[] = []
        response.forEach((res: IContent) => {
          if (res.tags) {
            res.tags.forEach((tag: string) => {
              if (tagArray.indexOf(tag) < 0) {
                tagArray.push(tag)
              }
            });
          }
        });
        setTags(tagArray)
      }).catch(err => {
        console.log(err);
      })
    window.scroll(0, 0)
  }, [])

  return (
    <div className="p-4 max-w-7xl	m-auto">
      {tags.map((tag, index) => {
        console.log(contents)
        return (
          <div key={index} className="p-4 max-w-7xl	m-auto md:grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] grid-flow-row-dense gap-x-8 gap-y-8">
            <TagDescriptionTile tag={tag} />
            {contents.filter((content) => content.tags?.includes(tag)).slice(0, 12).map(content => {
              return <ContentTile {...content} />
            })}
            <Link to={`/tag/${tag}`} className="text-white hover:text-gir-500">
              <div>Kattints ide a további tartalmakért a <span className="text-gir-500 font-black">{tag}</span> témában</div>
            </Link>
            <div className="row-span-1 h-16 col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-4">
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ContentsPage;
