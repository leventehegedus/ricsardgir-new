
import { animations } from "../../data/animations";
import {articles } from "../../data/articles";

export const ArticlesPage: React.FC = () => {
  const randomAnimation = Math.floor(Math.random() * animations.length);

  const renderArticleBlock = (block, id) => {
    let domain = block.url.split('/')[2]
    return (
      <a href={block.url} target="__blank" className={`flex flex-col border border-black overflow-hidden shadow-lg text-white bg-black p-2 transition-all duration-1000 ease-in-out hover:invert hover:scale-105	hover:rotate-1 ${block.title.length > 150 && "row-span-2"}`}
        data-aos={animations[randomAnimation]}
        key={id}
      >
        <span>{block.title} - {domain}</span>
      </a>
    )
  }

  return (
    <div className="p-4 max-w-7xl	m-auto">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] auto-rows-[160px] gap-x-8 gap-y-8">
        {articles.map((block, index) => {
          return renderArticleBlock(block, index)
        })
        }
      </div>
    </div>
  )
}

export default ArticlesPage;
