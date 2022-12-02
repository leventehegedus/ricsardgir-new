import { IArticle } from "../../types";

import { animations } from "../../data/animations";
import { articles } from "../../data/articles";
import { interviews } from "../../data/articles";

export const ArticlesPage: React.FC = () => {
  const randomAnimation = Math.floor(Math.random() * animations.length);

  const renderArticleBlock = (block: IArticle, id: number) => {
    let domain = block.url.split('/')[2]
    return (
      <a href={block.url} target="__blank" className={`flex flex-col border border-white overflow-hidden shadow-lg text-white bg-black p-2 transition-all duration-1000 ease-in-out hover:invert hover:scale-105	${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"} ${block.title.length > 120 ? Math.random() > 0.5 ? "row-span-2" : "col-span-2" : ""}`}
        data-aos={animations[randomAnimation]}
        key={id}
      >
        <span>{block.title}</span>
        <br/>
        <span>{domain}</span>
      </a>
    )
  }

  const renderBlock = (content: IArticle[], title: string) => {
    return (
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] auto-rows-[160px] grid-flow-dense gap-x-8 gap-y-8 mb-8">
        <div className="font-black uppercase text-gir-500">{title}</div>
        {content.map((block, index) => {
          return renderArticleBlock(block, index)
        })
        }
      </div>
    )
  }

  return (
    <div className="p-4 max-w-7xl	m-auto">
      {renderBlock(articles, "Rólunk írták")}
      {renderBlock(interviews, "Interjúk")}
    </div>
  )
}

export default ArticlesPage;
