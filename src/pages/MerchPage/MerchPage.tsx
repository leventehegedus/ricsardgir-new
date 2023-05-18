import { merchs } from "../../data/merch";
import { animations } from "../../data/animations";


export const MerchPage: React.FC = () => {

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] grid-flow-row-dense gap-x-8 gap-y-8">
      {merchs?.map((merch, index) => {
        return (
          <div className="card row-span-2 col-span-1" key={index}>
            <a href={merch.link}
              className="card__face flex flex-col border border-black overflow-hidden shadow-lg bg-white p-4"
              key={merch.id}
              // data-aos={animations[Math.floor(Math.random() * animations.length)]}
              target="__blank">
              <div className="h-full w-full overflow-hidden mb-4">
                <img src={"./merch/" + merch.img} className="h-full w-full object-cover	object-center transition-all duration-1000 ease-in-out" />
              </div>
              <div>
                <div className="font-black text-gray-900 mb-2">
                  {merch.price}{merch.currency}
                </div>
                <div className="text-gray-700 text-xs">
                  {merch.title}
                </div>
              </div>
            </a>
            <div className="card__face card__face--back">
              <a href={merch.link}
                className="flex h-full w-full flex-col border border-black overflow-hidden shadow-lg bg-white  p-4"
                target="__blank">
                <div className="text-black">
                  <div className="font-gray-900 text-4xl mb-4">{merch.price}{merch.currency}</div>
                  <div className="font-gray-700 text-xs">{merch.description}</div>
                </div>
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default MerchPage;
